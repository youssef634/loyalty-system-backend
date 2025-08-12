import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service/prisma.service';

@Injectable()
export class TransactionService {
    constructor(private prisma: PrismaService) { }

    private async checkAdmin(userId: number) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user || user.role !== 'ADMIN') {
            throw new ForbiddenException('Access denied. Admins only.');
        }
    }

    async getTransactions(
        currentUserId: number,
        page: number = 1,
        searchFilters?: {
            id?: number;
            type?: string;
            pointsMin?: number;
            pointsMax?: number;
            date?: string; // YYYY-MM-DD
            userId?: number;
            cafeProductId?: number;
            restaurantProductId?: number;
        }
    ) {
        await this.checkAdmin(currentUserId);

        const limit = Number(process.env.TAKE);
        const filters: any = {};

        if (searchFilters?.id) filters.id = searchFilters.id;
        if (searchFilters?.type) filters.type = { contains: searchFilters.type, mode: 'insensitive' };
        if (searchFilters?.pointsMin !== undefined || searchFilters?.pointsMax !== undefined) {
            filters.points = {};
            if (searchFilters.pointsMin !== undefined) filters.points.gte = searchFilters.pointsMin;
            if (searchFilters.pointsMax !== undefined) filters.points.lte = searchFilters.pointsMax;
        }
        if (searchFilters?.date) {
            const startDate = new Date(searchFilters.date);
            const endDate = new Date(searchFilters.date);
            endDate.setDate(endDate.getDate() + 1);
            filters.date = { gte: startDate, lt: endDate };
        }
        if (searchFilters?.userId) filters.userId = searchFilters.userId;
        if (searchFilters?.cafeProductId) filters.cafeProductId = searchFilters.cafeProductId;
        if (searchFilters?.restaurantProductId) filters.restaurantProductId = searchFilters.restaurantProductId;

        const total = await this.prisma.transaction.count({ where: filters });
        const totalPages = Math.ceil(total / limit);
        if (page > totalPages && total > 0) throw new NotFoundException('Page not found');

        const skip = (page - 1) * limit;

        const transactions = await this.prisma.transaction.findMany({
            where: filters,
            skip,
            take: limit,
            orderBy: { date: 'desc' },
            include: {
                user: { select: { id: true, enName: true, arName: true, email: true } },
                cafeProduct: true,
                restaurantProduct: true,
            },
        });

        return {
            total,
            totalPages,
            currentPage: page,
            transactions,
        };
    }

    async deleteTransaction(currentUserId: number, transactionId: number) {
        await this.checkAdmin(currentUserId);

        const transaction = await this.prisma.transaction.findUnique({ where: { id: transactionId } });
        if (!transaction) throw new NotFoundException('Transaction not found');

        return this.prisma.transaction.delete({ where: { id: transactionId } });
    }

    async getAllTransactionsForExport(currentUserId: number) {
        await this.checkAdmin(currentUserId);

        return this.prisma.transaction.findMany({
            select: {
                id: true,
                type: true,
                points: true,
                date: true,
                user: {
                    select: {
                        enName: true,
                        arName: true,
                        email: true
                    }
                },
                cafeProduct: {
                    select: {
                        enName: true,
                        arName: true
                    }
                },
                restaurantProduct: {
                    select: {
                        enName: true,
                        arName: true
                    }
                }
            }
        });
    }
}