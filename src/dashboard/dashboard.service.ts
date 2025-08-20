import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service/prisma.service';
import { Role } from '@prisma/client';
import { startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear } from 'date-fns';

@Injectable()
export class DashboardService {
    constructor(private prisma: PrismaService) { }

    async getDashboardData(currentUserId: number) {
        const user = await this.prisma.user.findUnique({ where: { id: currentUserId } });
        if (!user || user.role !== Role.ADMIN) {
            throw new ForbiddenException('Only admins can view dashboard');
        }

        // 1. Number of customers
        const customersCount = await this.prisma.user.count({
            where: { role: 'USER' },
        });

        // 2. Total points (sum of all users points)
        const totalPoints = await this.prisma.user.aggregate({
            where: { role: 'USER' },
            _sum: { points: true },
        });

        // 3. Average points
        const avgPoints = await this.prisma.user.aggregate({
            where: { role: 'USER' },
            _avg: { points: true },
        });

        // 4. Number of transactions (only for users)
        const transactionsCount = await this.prisma.transaction.count({
            where: { user: { role: 'USER' } },
        });

        // 5. Total earn & redeem points (only for users)
        const earnPoints = await this.prisma.transaction.aggregate({
            where: { type: 'earn', user: { role: 'USER' } },
            _sum: { points: true },
        });
        const redeemPoints = await this.prisma.transaction.aggregate({
            where: { type: 'redeem', user: { role: 'USER' } },
            _sum: { points: true },
        });

        // 6. Top 5 customers with most earn points (only for users)
        const topEarners = await this.prisma.transaction.groupBy({
            by: ['userId'],
            where: { type: 'earn', user: { role: 'USER' } },
            _sum: { points: true },
            orderBy: { _sum: { points: 'desc' } },
            take: 5,
        });

        const topEarnersWithUser = await Promise.all(
            topEarners.map(async (t) => {
                const u = await this.prisma.user.findUnique({ where: { id: t.userId, role: 'USER' } });
                return u
                    ? {
                        userId: u.id,
                        enName: u.enName,
                        arName: u.arName,
                        points: t._sum.points || 0,
                    }
                    : null;
            }),
        );

        // 7. Customers points distribution (only users)
        const customers = await this.prisma.user.findMany({
            where: { role: 'USER' },
            select: { id: true, points: true },
        });

        const totalCustomers = customers.length;
        const pointsDistribution = {
            '0-500': totalCustomers ? (customers.filter((c) => c.points <= 500).length / totalCustomers * 100).toFixed(2) : '0',
            '501-1000': totalCustomers ? (customers.filter((c) => c.points >= 501 && c.points <= 1000).length / totalCustomers * 100).toFixed(2) : '0',
            '1001-1500': totalCustomers ? (customers.filter((c) => c.points >= 1001 && c.points <= 1500).length / totalCustomers * 100).toFixed(2) : '0',
            '1501-2000': totalCustomers ? (customers.filter((c) => c.points >= 1501 && c.points <= 2000).length / totalCustomers * 100).toFixed(2) : '0',
            '2001+': totalCustomers ? (customers.filter((c) => c.points > 2000).length / totalCustomers * 100).toFixed(2) : '0',
        };

        // 8. Most used products (top 5 from both cafe and restaurant)
        const cafeProductsUsage = await this.prisma.transaction.groupBy({
            by: ['cafeProductId'],
            where: {
                cafeProductId: { not: null },
                user: { role: 'USER' },
            },
            _count: { cafeProductId: true },
            orderBy: { _count: { cafeProductId: 'desc' } },
        });

        const restaurantProductsUsage = await this.prisma.transaction.groupBy({
            by: ['restaurantProductId'],
            where: {
                restaurantProductId: { not: null },
                user: { role: 'USER' },
            },
            _count: { restaurantProductId: true },
            orderBy: { _count: { restaurantProductId: 'desc' } },
        });

        // Combine and sort by usage count
        const combinedUsage = [
            ...cafeProductsUsage.map(p => ({
                type: 'cafe',
                productId: p.cafeProductId,
                count: p._count.cafeProductId,
            })),
            ...restaurantProductsUsage.map(p => ({
                type: 'restaurant',
                productId: p.restaurantProductId,
                count: p._count.restaurantProductId,
            })),
        ].filter(p => p.productId !== null)
         .sort((a, b) => b.count - a.count)
         .slice(0, 5);

        // Fetch product names
        const mostUsedProducts = await Promise.all(
            combinedUsage.map(async (p) => {
                if (p.type === 'cafe') {
                    const product = await this.prisma.cafeProduct.findUnique({
                        where: { id: p.productId },
                        select: { enName: true, arName: true }
                    });
                    return {
                        type: p.type,
                        productId: p.productId,
                        enName: product?.enName || '',
                        arName: product?.arName || '',
                        count: p.count,
                    };
                } else {
                    const product = await this.prisma.restaurantProduct.findUnique({
                        where: { id: p.productId },
                        select: { enName: true, arName: true }
                    });
                    return {
                        type: p.type,
                        productId: p.productId,
                        enName: product?.enName || '',
                        arName: product?.arName || '',
                        count: p.count,
                    };
                }
            })
        );

        return {
            customersCount,
            totalPoints: totalPoints._sum.points || 0,
            avgPoints: avgPoints._avg.points || 0,
            transactionsCount,
            totalEarnPoints: earnPoints._sum.points || 0,
            totalRedeemPoints: redeemPoints._sum.points || 0,
            topEarners: topEarnersWithUser,
            pointsDistribution,
            mostUsedProducts,
        };
    }

    async getAnalyticsByPeriod(
        currentUserId: number,
        period: 'day' | 'week' | 'month' | 'year',
        date: string // ISO date string, e.g. '2025-08-20'
    ) {
        const user = await this.prisma.user.findUnique({ where: { id: currentUserId } });
        if (!user || user.role !== Role.ADMIN) {
            throw new ForbiddenException('Only admins can view analytics');
        }

        // Calculate date range
        const baseDate = new Date(date);
        let from: Date, to: Date;
        switch (period) {
            case 'day':
                from = startOfDay(baseDate);
                to = endOfDay(baseDate);
                break;
            case 'week':
                from = startOfWeek(baseDate, { weekStartsOn: 1 }); // Monday
                to = endOfWeek(baseDate, { weekStartsOn: 1 });
                break;
            case 'month':
                from = startOfMonth(baseDate);
                to = endOfMonth(baseDate);
                break;
            case 'year':
                from = startOfYear(baseDate);
                to = endOfYear(baseDate);
                break;
            default:
                throw new Error('Invalid period');
        }

        // Transactions count
        const transactionsCount = await this.prisma.transaction.count({
            where: {
                date: { gte: from, lte: to },
                user: { role: 'USER' },
            },
        });

        // Earn count & total points
        const earnStats = await this.prisma.transaction.aggregate({
            where: {
                type: 'earn',
                date: { gte: from, lte: to },
                user: { role: 'USER' },
            },
            _count: { id: true },
            _sum: { points: true },
        });

        // Redeem count & total points
        const redeemStats = await this.prisma.transaction.aggregate({
            where: {
                type: 'redeem',
                date: { gte: from, lte: to },
                user: { role: 'USER' },
            },
            _count: { id: true },
            _sum: { points: true },
        });

        return {
            period,
            from,
            to,
            transactions: {
                count: transactionsCount,
            },
            earn: {
                count: earnStats._count.id,
                totalPoints: earnStats._sum.points || 0,
            },
            redeem: {
                count: redeemStats._count.id,
                totalPoints: redeemStats._sum.points || 0,
            },
        };
    }
}