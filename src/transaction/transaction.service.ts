import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service/prisma.service';
import { DateTime } from 'luxon';

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
            limit?: number;
            id?: number;
            type?: string;
            pointsMin?: number;
            pointsMax?: number;
            fromDate?: string;
            toDate?: string;
            userId?: number;
            email?: string;
            cafeProductId?: number;
            restaurantProductId?: number;
        }
    ) {
        const user = await this.prisma.user.findUnique({ where: { id: currentUserId } });
        if (!user) throw new ForbiddenException('User not found');

        const isAdmin = user.role === 'ADMIN';

        // Get timezone from settings (fallback UTC)
        const settings = await this.prisma.settings.findUnique({ where: { userId: currentUserId } });
        const timezone = settings?.timezone || 'UTC';

        // Use limit from query or default to 10
        const limit = searchFilters?.limit && searchFilters.limit > 0 ? searchFilters.limit : 10;
        const filters: any = {};

        if (searchFilters?.id) filters.id = searchFilters.id;
        if (searchFilters?.type) filters.type = { contains: searchFilters.type, mode: 'insensitive' };
        if (searchFilters?.pointsMin !== undefined || searchFilters?.pointsMax !== undefined) {
            filters.points = {};
            if (searchFilters.pointsMin !== undefined) filters.points.gte = searchFilters.pointsMin;
            if (searchFilters.pointsMax !== undefined) filters.points.lte = searchFilters.pointsMax;
        }

        // Date filter (date-only range)
        if (searchFilters?.fromDate || searchFilters?.toDate) {
            const filtersDate: any = {};
            if (searchFilters.fromDate) {
                filtersDate.gte = new Date(searchFilters.fromDate + "T00:00:00Z");
            }
            if (searchFilters.toDate) {
                filtersDate.lte = new Date(searchFilters.toDate + "T23:59:59Z");
            }
            filters.date = filtersDate;
        }

        if (searchFilters?.userId) filters.userId = searchFilters.userId;
        
        // Email filter - search by user email
        if (searchFilters?.email) {
            filters.user = {
                email: { contains: searchFilters.email, mode: 'insensitive' }
            };
        }
        
        if (searchFilters?.cafeProductId) filters.cafeProductId = searchFilters.cafeProductId;
        if (searchFilters?.restaurantProductId) filters.restaurantProductId = searchFilters.restaurantProductId;

        // If not admin, restrict to only current user's transactions
        if (!isAdmin) {
            filters.userId = currentUserId;
        }

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
            },
        });

        // Add formatted date according to timezone
        const formattedTransactions = transactions.map(tx => ({
            ...tx,
            formattedDate: DateTime
                .fromJSDate(tx.date, { zone: 'utc' })
                .setZone(timezone)
                .toFormat('MMM dd, yyyy, hh:mm a')
        }));

        return {
            total,
            totalPages,
            currentPage: page,
            transactions: formattedTransactions,
        };
    }

    async deleteTransaction(currentUserId: number, transactionId: number) {
        await this.checkAdmin(currentUserId);

        const transaction = await this.prisma.transaction.findUnique({ where: { id: transactionId } });
        if (!transaction) throw new NotFoundException('Transaction not found');

        return this.prisma.transaction.delete({ where: { id: transactionId } });
    }
}
