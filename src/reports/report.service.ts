import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service/prisma.service';

@Injectable()
export class ReportService {
    constructor(private prisma: PrismaService) { }

    /** 1- Customers Report */
    async customersReport() {
        return this.prisma.user.findMany({
            where: {role: "USER"},
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

    /** 2- Individual Customer Report (with transactions + rewards) */
    async customerReport(userId: number) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
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

    /** 3- Products Report (without images) */
    async productsReport() {
        const cafeProducts = await this.prisma.cafeProduct.findMany({
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

    /** 4- Rewards Report */
    async rewardsReport() {
        return this.prisma.myReward.findMany({
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
}