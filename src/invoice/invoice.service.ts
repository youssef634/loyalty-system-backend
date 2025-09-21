import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service/prisma.service';
import { DateTime } from 'luxon';

@Injectable()
export class InvoiceService {
    constructor(private prisma: PrismaService) { }

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

        // 🔹 Get system timezone from settings
        const settings = await this.prisma.settings.findFirst();
        const timezone = settings?.timezone || 'UTC';

        const totalInvoices = await this.prisma.invoice.count({ where });
        const totalPages = Math.ceil(totalInvoices / take);

        const [data, total] = await this.prisma.$transaction([
            this.prisma.invoice.findMany({
                where,
                skip,
                take,
                orderBy: { createdAt: 'desc' },
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
            this.prisma.invoice.count({ where }),
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
        const invoice = await this.prisma.invoice.findUnique({
            where: { id },
            include: {
                items: {
                    include: {
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
        const settings = await this.prisma.settings.findFirst();
        const timezone = settings?.timezone || 'UTC';

        return {
            ...invoice,
            formattedDate: DateTime.fromJSDate(invoice.createdAt, { zone: 'utc' })
                .setZone(timezone)
                .toFormat('MMM dd, yyyy, hh:mm a'),
        };
    }
}