import { Injectable, NotFoundException, ForbiddenException, Logger } from '@nestjs/common';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../connection/connection.service';
import { DateTime } from 'luxon';

@Injectable()
export class InvoiceService {
    private readonly logger = new Logger(InvoiceService.name);

    constructor(
        private cloudPrisma: CloudPrismaService,
        private localPrisma: LocalPrismaService,
        private connectionService: ConnectionService,
    ) { }

    // 🔹 Get all invoice headers
    async getAllInvoices(
        page: number,
        filters?: {
            limit?: number | string;
            userId?: number | string;
            phone?: string;
            email?: string;
            startDate?: string;
            endDate?: string;
            minPrice?: number | string;
            maxPrice?: number | string;
            minPoints?: number | string;
            maxPoints?: number | string;
            sortBy?: string;
            sortOrder?: 'asc' | 'desc';
        },
    ) {
        // 🔹 Ensure numbers are parsed
        const take = filters?.limit && Number(filters.limit) > 0 ? Number(filters.limit) : 10;
        const skip = (page - 1) * take;

        const where: any = {};

        if (filters?.userId) where.userId = Number(filters.userId);
        if (filters?.phone) where.phone = { contains: filters.phone, mode: 'insensitive' };
        if (filters?.email) where.email = { contains: filters.email, mode: 'insensitive' };

        if (filters?.startDate || filters?.endDate) {
            where.createdAt = {};
            if (filters.startDate) where.createdAt.gte = new Date(filters.startDate);
            if (filters.endDate) where.createdAt.lte = new Date(filters.endDate);
        }

        if (filters?.minPrice || filters?.maxPrice) {
            where.totalPrice = {};
            if (filters.minPrice) where.totalPrice.gte = Number(filters.minPrice);
            if (filters.maxPrice) where.totalPrice.lte = Number(filters.maxPrice);
        }

        if (filters?.minPoints || filters?.maxPoints) {
            where.points = {};
            if (filters.minPoints) where.points.gte = Number(filters.minPoints);
            if (filters.maxPoints) where.points.lte = Number(filters.maxPoints);
        }

        // Sorting logic
        let orderBy: any;
        if (filters?.sortBy) {
            orderBy = {};
            if (filters.sortBy === 'user.name') {
                orderBy = {
                    user: {
                        enName: filters.sortOrder === 'asc' ? 'asc' : 'desc',
                    },
                };
            } else if (['id', 'totalPrice', 'points', 'createdAt', 'userId'].includes(filters.sortBy)) {
                orderBy[filters.sortBy] = filters.sortOrder === 'asc' ? 'asc' : 'desc';
            } else {
                orderBy = { createdAt: filters.sortOrder === 'asc' ? 'asc' : 'desc' };
            }
        } else {
            orderBy = { id: 'asc' };
        }

        // 🔹 Get system timezone from settings
        const isOnline = this.connectionService.getConnectionStatus();
        const prismaService: any = isOnline ? this.cloudPrisma : this.localPrisma;

        const settings = await prismaService.settings.findUnique({ where: { id: 1 } });
        const timezone = settings?.timezone || 'UTC';

        const totalInvoices = await prismaService.invoice.count({ where });
        const totalPages = Math.ceil(totalInvoices / take);

        const [data, total] = await prismaService.$transaction([
            prismaService.invoice.findMany({
                where,
                skip,
                take,
                orderBy,
                select: {
                    id: true,
                    userId: true,
                    phone: true,
                    email: true,
                    totalPrice: true,
                    points: true,
                    currency: true,
                    createdAt: true,
                    user: {
                        select: {
                            id: true,
                            enName: true,
                            arName: true,
                            email: true,
                            phone: true,
                        },
                    },
                },
            }),
            prismaService.invoice.count({ where }),
        ]);

        // 🔹 Format createdAt
        const formattedData = data.map((invoice) => ({
            ...invoice,
            formattedDate: DateTime.fromJSDate(invoice.createdAt, { zone: 'utc' })
                .setZone(timezone)
                .toFormat('MMM dd, yyyy, hh:mm a'),
        }));

        return {
            totalInvoices,
            totalPages,
            currentPage: page,
            data: formattedData,
        };
    }

    // 🔹 Get single invoice with items
    async getInvoiceById(id: number) {
        const isOnline = this.connectionService.getConnectionStatus();
        const prismaService: any = isOnline ? this.cloudPrisma : this.localPrisma;

        const invoice = await prismaService.invoice.findUnique({
            where: { id },
            include: {
                items: {
                    include: {
                        category: true,
                        cafeProduct: true,
                        restaurantProduct: true,
                    },
                },
                user: {
                    select: {
                        id: true,
                        enName: true,
                        arName: true,
                        email: true,
                        phone: true,
                    },
                },
            },
        });

        if (!invoice) {
            throw new NotFoundException(`Invoice with id ${id} not found`);
        }

        // 🔹 Get timezone
        const settings = await prismaService.settings.findUnique({ where: { id: 1 } });
        const timezone = settings?.timezone || 'UTC';

        return {
            ...invoice,
            formattedDate: DateTime.fromJSDate(invoice.createdAt, { zone: 'utc' })
                .setZone(timezone)
                .toFormat('MMM dd, yyyy, hh:mm a'),
        };
    }

    async deleteInvoice(currentUserId: number, id: number) {
        const isOnline = this.connectionService.getConnectionStatus();

        if (!isOnline) {
            throw new ForbiddenException('Invoice deletion requires internet connection');
        }

        const currentUser = await this.cloudPrisma.user.findUnique({ where: { id: currentUserId } });
        if (!currentUser) throw new NotFoundException('User not found');

        // Find the invoice and include its transaction
        const invoice = await this.cloudPrisma.invoice.findUnique({
            where: { id },
            include: { transaction: true },
        });
        if (!invoice) throw new NotFoundException(`Invoice with id ${id} not found`);

        // If there is a transaction, cancel it using the same logic as cancelTransaction
        if (invoice.transaction) {
            const transaction = invoice.transaction;
            const user = await this.cloudPrisma.user.findUnique({ where: { id: transaction.userId } });
            if (user) {
                // Revert points based on type
                const userPointsUpdate = transaction.type === 'earn'
                    ? { points: user.points - transaction.points }
                    : { points: user.points + transaction.points };

                await this.cloudPrisma.user.update({
                    where: { id: transaction.userId },
                    data: userPointsUpdate,
                });
            }

            // Mark transaction as cancelled
            await this.cloudPrisma.transaction.update({
                where: { id: transaction.id },
                data: { status: 'CANCELLED' },
            });

            // Delete the transaction
            await this.cloudPrisma.transaction.delete({
                where: { id: transaction.id },
            });
        }

        // Delete related invoice items
        await this.cloudPrisma.invoiceItem.deleteMany({ where: { invoiceId: id } });

        // Delete the invoice itself
        await this.cloudPrisma.invoice.delete({ where: { id } });

        // ✅ Delete log
        try {
            await this.cloudPrisma.deleteLog.create({
                data: {
                    userId: currentUserId,
                    userName: currentUser.enName,
                    screen: 'invoices',
                    message: `${currentUser.enName} Delete invoice ${invoice.id}`
                }
            });
        } catch (err) {
            this.logger.warn(`⚠️ Failed to create delete log: ${err}`);
        }

        // Sync deletion to local
        try {
            await this.localPrisma.invoiceItem.deleteMany({ where: { invoiceId: id } });
            await this.localPrisma.invoice.delete({ where: { id } });
            if (invoice.transaction) {
                await this.localPrisma.transaction.delete({ where: { id: invoice.transaction.id } });
            }
            this.logger.log(`Invoice ${id} and its transaction deletion synced to local database`);
        } catch (error) {
            this.logger.warn(`Failed to sync invoice deletion to local DB: ${error}`);
        }

        return { message: `Invoice ${id} and its transaction deleted successfully` };
    }
}