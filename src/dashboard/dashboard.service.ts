import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service/prisma.service';
import { Role } from '@prisma/client';
import { startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear } from 'date-fns';

@Injectable()
export class DashboardService {
    constructor(private prisma: PrismaService) { }

    async getDashboardData(currentUserId: number) {
        const user = await this.prisma.user.findUnique({ where: { id: currentUserId } });
        if (!user) {
            throw new ForbiddenException('User not found');
        }

        if (user.role === Role.ADMIN) {
            // 🔹 Admin Dashboard
            // 1. Number of customers
            const customersCount = await this.prisma.user.count({ where: { role: 'USER' } });

            // 2. Total points
            const totalPoints = await this.prisma.user.aggregate({
                where: { role: 'USER' },
                _sum: { points: true },
            });

            // 3. Average points
            const avgPoints = await this.prisma.user.aggregate({
                where: { role: 'USER' },
                _avg: { points: true },
            });

            // 4. Number of transactions
            const transactionsCount = await this.prisma.transaction.count({
                where: { user: { role: 'USER' } },
            });

            // 5. Total earn & redeem points
            const earnPoints = await this.prisma.transaction.aggregate({
                where: { type: 'earn', user: { role: 'USER' } },
                _sum: { points: true },
            });
            const redeemPoints = await this.prisma.transaction.aggregate({
                where: { type: 'redeem', user: { role: 'USER' } },
                _sum: { points: true },
            });

            // 6. Top earners
            const topEarners = await this.prisma.transaction.groupBy({
                by: ['userId'],
                where: { type: 'earn', user: { role: 'USER' } },
                _sum: { points: true },
                orderBy: { _sum: { points: 'desc' } },
                take: 5,
            });
            const topEarnersWithUser = await Promise.all(
                topEarners.map(async (t) => {
                    const u = await this.prisma.user.findUnique({ where: { id: t.userId } });
                    return u
                        ? { userId: u.id, enName: u.enName, arName: u.arName, points: t._sum.points || 0 }
                        : null;
                }),
            );

            // 7. Points distribution
            const customers = await this.prisma.user.findMany({
                where: { role: 'USER' },
                select: { id: true, points: true },
            });
            const totalCustomers = customers.length;
            const pointsDistribution = {
                '0-500': totalCustomers ? (customers.filter(c => c.points <= 500).length / totalCustomers * 100).toFixed(2) : '0',
                '501-1000': totalCustomers ? (customers.filter(c => c.points >= 501 && c.points <= 1000).length / totalCustomers * 100).toFixed(2) : '0',
                '1001-1500': totalCustomers ? (customers.filter(c => c.points >= 1001 && c.points <= 1500).length / totalCustomers * 100).toFixed(2) : '0',
                '1501-2000': totalCustomers ? (customers.filter(c => c.points >= 1501 && c.points <= 2000).length / totalCustomers * 100).toFixed(2) : '0',
                '2001+': totalCustomers ? (customers.filter(c => c.points > 2000).length / totalCustomers * 100).toFixed(2) : '0',
            };

            // 8. Most used products (global top 5)
            const cafeProductsUsage = await this.prisma.transaction.groupBy({
                by: ['cafeProductId'],
                where: { cafeProductId: { not: null }, user: { role: 'USER' } },
                _count: { cafeProductId: true },
                orderBy: { _count: { cafeProductId: 'desc' } },
            });
            const restaurantProductsUsage = await this.prisma.transaction.groupBy({
                by: ['restaurantProductId'],
                where: { restaurantProductId: { not: null }, user: { role: 'USER' } },
                _count: { restaurantProductId: true },
                orderBy: { _count: { restaurantProductId: 'desc' } },
            });
            const combinedUsage = [
                ...cafeProductsUsage.map(p => ({ type: 'cafe', productId: p.cafeProductId, count: p._count.cafeProductId })),
                ...restaurantProductsUsage.map(p => ({ type: 'restaurant', productId: p.restaurantProductId, count: p._count.restaurantProductId })),
            ].filter(p => p.productId !== null)
                .sort((a, b) => b.count - a.count)
                .slice(0, 5);
            const mostUsedProducts = await Promise.all(
                combinedUsage.map(async (p) => {
                    const product = p.type === 'cafe'
                        ? await this.prisma.cafeProduct.findUnique({ where: { id: p.productId }, select: { enName: true, arName: true } })
                        : await this.prisma.restaurantProduct.findUnique({ where: { id: p.productId }, select: { enName: true, arName: true } });
                    return { ...p, enName: product?.enName || '', arName: product?.arName || '' };
                })
            );

            // 9. Recent users
            const recentUsers = await this.prisma.user.findMany({
                where: { role: 'USER' },
                select: { id: true, enName: true, arName: true, email: true, points: true, profileImage: true, createdAt: true },
                orderBy: { createdAt: 'desc' },
                take: 5
            });

            return {
                role: 'ADMIN',
                customersCount,
                totalPoints: totalPoints._sum.points || 0,
                avgPoints: avgPoints._avg.points || 0,
                transactionsCount,
                totalEarnPoints: earnPoints._sum.points || 0,
                totalRedeemPoints: redeemPoints._sum.points || 0,
                topEarners: topEarnersWithUser,
                pointsDistribution,
                mostUsedProducts,
                recentUsers
            };
        }

        // 🔹 User Dashboard
        else {
            const totalPoints = user.points;

            const transactionsCount = await this.prisma.transaction.count({
                where: { userId: currentUserId },
            });

            const earnPoints = await this.prisma.transaction.aggregate({
                where: { type: 'earn', userId: currentUserId },
                _sum: { points: true },
            });

            const redeemPoints = await this.prisma.transaction.aggregate({
                where: { type: 'redeem', userId: currentUserId },
                _sum: { points: true },
            });

            // Most used products for this user
            const cafeProductsUsage = await this.prisma.transaction.groupBy({
                by: ['cafeProductId'],
                where: { cafeProductId: { not: null }, userId: currentUserId },
                _count: { cafeProductId: true },
                orderBy: { _count: { cafeProductId: 'desc' } },
                take: 5,
            });
            const restaurantProductsUsage = await this.prisma.transaction.groupBy({
                by: ['restaurantProductId'],
                where: { restaurantProductId: { not: null }, userId: currentUserId },
                _count: { restaurantProductId: true },
                orderBy: { _count: { restaurantProductId: 'desc' } },
                take: 5,
            });
            const combinedUsage = [
                ...cafeProductsUsage.map(p => ({ type: 'cafe', productId: p.cafeProductId, count: p._count.cafeProductId })),
                ...restaurantProductsUsage.map(p => ({ type: 'restaurant', productId: p.restaurantProductId, count: p._count.restaurantProductId })),
            ].filter(p => p.productId !== null)
                .sort((a, b) => b.count - a.count)
                .slice(0, 5);
            const mostUsedProducts = await Promise.all(
                combinedUsage.map(async (p) => {
                    const product = p.type === 'cafe'
                        ? await this.prisma.cafeProduct.findUnique({ where: { id: p.productId }, select: { enName: true, arName: true } })
                        : await this.prisma.restaurantProduct.findUnique({ where: { id: p.productId }, select: { enName: true, arName: true } });
                    return { ...p, enName: product?.enName || '', arName: product?.arName || '' };
                })
            );

            return {
                role: 'USER',
                totalPoints,
                transactionsCount,
                totalEarnPoints: earnPoints._sum.points || 0,
                totalRedeemPoints: redeemPoints._sum.points || 0,
                mostUsedProducts,
            };
        }
    }

    async getAnalyticsByPeriod(
        currentUserId: number,
        period: 'day' | 'week' | 'month' | 'year',
        date: string // ISO date string, e.g. '2025-08-20'
    ) {
        const user = await this.prisma.user.findUnique({ where: { id: currentUserId } });
        if (!user) {
            throw new ForbiddenException('User not found');
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

        if (user.role === Role.ADMIN) {
            // 🔹 Admin → stats across all users
            const transactionsCount = await this.prisma.transaction.count({
                where: { date: { gte: from, lte: to }, user: { role: 'USER' } },
            });

            const earnStats = await this.prisma.transaction.aggregate({
                where: { type: 'earn', date: { gte: from, lte: to }, user: { role: 'USER' } },
                _count: { id: true },
                _sum: { points: true },
            });

            const redeemStats = await this.prisma.transaction.aggregate({
                where: { type: 'redeem', date: { gte: from, lte: to }, user: { role: 'USER' } },
                _count: { id: true },
                _sum: { points: true },
            });

            return {
                role: 'ADMIN',
                period,
                from,
                to,
                transactions: { count: transactionsCount },
                earn: { count: earnStats._count.id, totalPoints: earnStats._sum.points || 0 },
                redeem: { count: redeemStats._count.id, totalPoints: redeemStats._sum.points || 0 },
            };
        }

        // 🔹 USER → only his own stats
        else {
            const transactionsCount = await this.prisma.transaction.count({
                where: { date: { gte: from, lte: to }, userId: currentUserId },
            });

            const earnStats = await this.prisma.transaction.aggregate({
                where: { type: 'earn', date: { gte: from, lte: to }, userId: currentUserId },
                _count: { id: true },
                _sum: { points: true },
            });

            const redeemStats = await this.prisma.transaction.aggregate({
                where: { type: 'redeem', date: { gte: from, lte: to }, userId: currentUserId },
                _count: { id: true },
                _sum: { points: true },
            });

            return {
                role: 'USER',
                period,
                from,
                to,
                transactions: { count: transactionsCount },
                earn: { count: earnStats._count.id, totalPoints: earnStats._sum.points || 0 },
                redeem: { count: redeemStats._count.id, totalPoints: redeemStats._sum.points || 0 },
            };
        }
    }
}