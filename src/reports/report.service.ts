import { Injectable, Logger } from '@nestjs/common';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../connection/connection.service';
import { Role } from '@prisma/client';

@Injectable()
export class ReportService {
    private readonly logger = new Logger(ReportService.name);

    constructor(
        private cloudPrisma: CloudPrismaService,
        private localPrisma: LocalPrismaService,
        private connectionService: ConnectionService,
    ) { }

    /** 1- Manager Report (exclude USERs, optional role filter) */
    async managerReport(role?: Role) {
        const isOnline = this.connectionService.getConnectionStatus();
        const prismaService: any = isOnline ? this.cloudPrisma : this.localPrisma;

        this.logger.log(`Fetching manager report from ${isOnline ? 'cloud' : 'local'} database`);

        return prismaService.user.findMany({
            where: {
                role: role ? role : undefined,
                NOT: { role: 'USER' },
            },
            select: {
                id: true,
                enName: true,
                arName: true,
                email: true,
                phone: true,
                role: true,
                createdAt: true,
            },
        });
    }

    /** 2- Customers Report */
    async customersReport() {
        const isOnline = this.connectionService.getConnectionStatus();
        const prismaService: any = isOnline ? this.cloudPrisma : this.localPrisma;

        this.logger.log(`Fetching customers report from ${isOnline ? 'cloud' : 'local'} database`);

        return prismaService.user.findMany({
            where: { role: 'USER' },
            select: {
                id: true,
                enName: true,
                arName: true,
                email: true,
                phone: true,
                role: true,
                points: true,
                _count: {
                    select: { transactions: true, myRewards: true },
                },
            },
        });
    }

    /** 3- Individual Customer Report (by id or phone) */
    async customerReport(search: { id?: number; phone?: string }) {
        const isOnline = this.connectionService.getConnectionStatus();
        const prismaService: any = isOnline ? this.cloudPrisma : this.localPrisma;

        this.logger.log(`Fetching customer report from ${isOnline ? 'cloud' : 'local'} database`);

        const user = await prismaService.user.findFirst({
            where: {
                OR: [
                    search.id ? { id: search.id } : undefined,
                    search.phone ? { phone: search.phone } : undefined,
                ].filter(Boolean),
            },
            select: {
                id: true,
                enName: true,
                arName: true,
                email: true,
                phone: true,
                role: true,
                points: true,
                transactions: {
                    select: {
                        id: true,
                        type: true,
                        points: true,
                        currency: true,
                        status: true,
                        date: true,
                    },
                    orderBy: { id: 'asc' },
                },
                myRewards: {
                    select: {
                        id: true,
                        type: true,
                        points: true,
                        status: true,
                        date: true,
                        note: true,
                        cafeProduct: { select: { enName: true, arName: true, price: true } },
                        restaurantProduct: { select: { enName: true, arName: true, price: true } },
                    },
                    orderBy: { id: 'asc' },
                },
            },
        });

        if (!user) throw new Error('Customer not found');
        return user;
    }

    /** 4- Transaction Report (exclude CANCELLED, optional filter type/date) */
    async transactionsReport(filter?: { type?: string; startDate?: Date; endDate?: Date }) {
        const isOnline = this.connectionService.getConnectionStatus();
        const prismaService: any = isOnline ? this.cloudPrisma : this.localPrisma;

        this.logger.log(`Fetching transactions report from ${isOnline ? 'cloud' : 'local'} database`);

        return prismaService.transaction.findMany({
            where: {
                status: { not: 'CANCELLED' },
                type: filter?.type ? filter.type : undefined,
                date: {
                    gte: filter?.startDate,
                    lte: filter?.endDate,
                },
            },
            select: {
                id: true,
                type: true,
                points: true,
                currency: true,
                status: true,
                date: true,
                user: { select: { id: true, enName: true, arName: true } },
            },
            orderBy: { id: 'asc' },
        });
    }

    /** 5- Products Report (optional filter by type/category) */
    async productsReport(filter?: { type?: string; categoryId?: number }) {
        const isOnline = this.connectionService.getConnectionStatus();
        const prismaService: any = isOnline ? this.cloudPrisma : this.localPrisma;

        this.logger.log(`Fetching products report from ${isOnline ? 'cloud' : 'local'} database`);

        const cafeProducts = await prismaService.cafeProduct.findMany({
            where: {
                type: filter?.type || undefined,
                categoryId: filter?.categoryId || undefined,
            },
            select: {
                id: true,
                enName: true,
                arName: true,
                price: true,
                points: true,
                type: true,
                category: { select: { enName: true, arName: true } },
            },
        });

        const restaurantProducts = await prismaService.restaurantProduct.findMany({
            where: {
                type: filter?.type || undefined,
                categoryId: filter?.categoryId || undefined,
            },
            select: {
                id: true,
                enName: true,
                arName: true,
                price: true,
                points: true,
                type: true,
                category: { select: { enName: true, arName: true } },
            },
        });

        return [...cafeProducts, ...restaurantProducts];
    }

    /** 6- Rewards Report (only APPROVED, optional filter by date/product type) */
    async rewardsReport(filter?: { startDate?: Date; endDate?: Date; type?: string }) {
        const isOnline = this.connectionService.getConnectionStatus();
        const prismaService: any = isOnline ? this.cloudPrisma : this.localPrisma;

        this.logger.log(`Fetching rewards report from ${isOnline ? 'cloud' : 'local'} database`);

        return prismaService.myReward.findMany({
            where: {
                status: 'APPROVED',
                type: filter?.type || undefined,
                date: {
                    gte: filter?.startDate,
                    lte: filter?.endDate,
                },
            },
            select: {
                id: true,
                type: true,
                points: true,
                status: true,
                date: true,
                note: true,
                user: { select: { id: true, enName: true, arName: true, email: true } },
                cafeProduct: { select: { enName: true, arName: true, price: true } },
                restaurantProduct: { select: { enName: true, arName: true, price: true } },
            },
            orderBy: { id: 'asc' },
        });
    }

    /** 7- Invoices Report (with filters: phone, date, points range, price range) */
    async invoicesReport(filter?: {
        phone?: string;
        startDate?: Date;
        endDate?: Date;
        minPoints?: number;
        maxPoints?: number;
        minPrice?: number;
        maxPrice?: number;
    }) {
        const isOnline = this.connectionService.getConnectionStatus();
        const prismaService: any = isOnline ? this.cloudPrisma : this.localPrisma;

        this.logger.log(`Fetching invoices report from ${isOnline ? 'cloud' : 'local'} database`);

        return prismaService.invoice.findMany({
            where: {
                phone: filter?.phone || undefined,
                createdAt: {
                    gte: filter?.startDate,
                    lte: filter?.endDate,
                },
                points: {
                    gte: filter?.minPoints,
                    lte: filter?.maxPoints,
                },
                totalPrice: {
                    gte: filter?.minPrice,
                    lte: filter?.maxPrice,
                },
            },
            select: {
                id: true,
                phone: true,
                email: true,
                totalPrice: true,
                discount: true,
                points: true,
                currency: true,
                createdAt: true,
                items: {
                    select: {
                        id: true,
                        quantity: true,
                        price: true,
                        total: true,
                        category: { select: { enName: true, arName: true } },
                        cafeProduct: { select: { enName: true, arName: true } },
                        restaurantProduct: { select: { enName: true, arName: true } },
                    },
                },
                user: { select: { id: true, enName: true, arName: true } },
            },
            orderBy: { id: 'asc' },
        });
    }
}