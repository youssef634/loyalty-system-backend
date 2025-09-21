import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service/prisma.service';
import { Role, RewardStatus, CategoryType, TransactionStatus } from '@prisma/client';

@Injectable()
export class ReportService {
    constructor(private prisma: PrismaService) { }

    /** 1- Manager Report (exclude USERs, optional role filter) */
    async managerReport(role?: Role) {
        return this.prisma.user.findMany({
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
        return this.prisma.user.findMany({
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
        const user = await this.prisma.user.findFirst({
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
                    orderBy: { date: 'desc' },
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
                    orderBy: { date: 'desc' },
                },
            },
        });

        if (!user) throw new Error('Customer not found');
        return user;
    }

    /** 4- Transaction Report (exclude CANCELLED, optional filter type/date) */
    async transactionsReport(filter?: { type?: string; startDate?: Date; endDate?: Date }) {
        return this.prisma.transaction.findMany({
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
            orderBy: { date: 'desc' },
        });
    }

    /** 5- Products Report (optional filter by type/category) */
    async productsReport(filter?: { type?: string; categoryId?: number }) {
        const cafeProducts = await this.prisma.cafeProduct.findMany({
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

        const restaurantProducts = await this.prisma.restaurantProduct.findMany({
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
        return this.prisma.myReward.findMany({
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
            orderBy: { date: 'desc' },
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
        return this.prisma.invoice.findMany({
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
                createdAt: true,
                items: {
                    select: {
                        id: true,
                        quantity: true,
                        price: true,
                        total: true,
                        cafeProduct: { select: { enName: true, arName: true } },
                        restaurantProduct: { select: { enName: true, arName: true } },
                    },
                },
                user: { select: { id: true, enName: true, arName: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
}