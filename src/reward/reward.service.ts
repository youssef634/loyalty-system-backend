import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { CloudPrismaService} from '../prisma/prisma.service/cloud-prisma.service';
import { RewardStatus } from '@prisma/client';
import { DateTime } from 'luxon';

@Injectable()
export class RewardService {
    constructor(private prisma: CloudPrismaService) { }

    async getRewards(
        currentUserId: number,
        page: number = 1,
        searchFilters?: {
            limit?: number;
            id?: number;
            type?: string;
            status?: string;
            fromDate?: string;
            toDate?: string;
            userId?: number;
            sortBy?: string;
            sortOrder?: 'asc' | 'desc';
        }
    ) {
        const user = await this.prisma.user.findUnique({ where: { id: currentUserId } });
        if (!user) throw new ForbiddenException('User not found');

        const isUser = user.role === 'USER';

        // Get timezone from settings (fallback UTC)
        let settings = await this.prisma.settings.findUnique({ where: { userId: currentUserId } });
        if (!settings) {
            settings = await this.prisma.settings.findUnique({ where: { id: 1 } });
            if (!settings) throw new NotFoundException('Admin settings not found');
        }
        const timezone = settings?.timezone || 'UTC';

        // Pagination limit (default 10)
        const limit = searchFilters?.limit && searchFilters.limit > 0 ? searchFilters.limit : 10;
        const filters: any = {};

        // Search filters
        if (searchFilters?.id) filters.id = searchFilters.id;
        if (searchFilters?.type) filters.type = { contains: searchFilters.type, mode: 'insensitive' };
        if (searchFilters?.status) filters.status = { equals: searchFilters.status };

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

        // Sorting logic
        let orderBy: any
        if (searchFilters?.sortBy) {
            orderBy = {};

            // Handle special sorting cases for rewards
            if (searchFilters.sortBy === 'user.name') {
                orderBy = {
                    user: {
                        enName: searchFilters.sortOrder === 'asc' ? 'asc' : 'desc'
                    }
                };
            } else if (searchFilters.sortBy === 'product.name') {
                // Sort by cafe or restaurant product name
                orderBy = [
                    { cafeProduct: { enName: searchFilters.sortOrder === 'asc' ? 'asc' : 'desc' } },
                    { restaurantProduct: { enName: searchFilters.sortOrder === 'asc' ? 'asc' : 'desc' } }
                ];
            } else if (['id', 'type', 'status', 'points', 'date', 'userId'].includes(searchFilters.sortBy)) {
                // Valid direct database fields
                orderBy[searchFilters.sortBy] = searchFilters.sortOrder === 'asc' ? 'asc' : 'desc';
            } else {
                // Fallback to date sorting for unsupported fields
                orderBy = { date: searchFilters.sortOrder === 'asc' ? 'asc' : 'desc' };
            }
        } else {
            orderBy = { id: 'asc' }; // Default sorting
        }

        if (isUser) {
            filters.userId = currentUserId;
        }

        // Count total
        const total = await this.prisma.myReward.count({ where: filters });
        const totalPages = Math.ceil(total / limit);
        if (page > totalPages && total > 0) throw new NotFoundException('Page not found');

        const skip = (page - 1) * limit;

        // Fetch rewards
        const rewards = await this.prisma.myReward.findMany({
            where: filters,
            skip,
            take: limit,
            orderBy,
            include: {
                user: { select: { enName: true, arName: true } },
                cafeProduct: { select: { enName: true, arName: true, image: true } },
                restaurantProduct: { select: { enName: true, arName: true, image: true } },
            },
        });

        // Format date based on timezone
        const formattedRewards = rewards.map(rw => ({
            ...rw,
            formattedDate: DateTime
                .fromJSDate(rw.date, { zone: 'utc' })
                .setZone(timezone)
                .toFormat('MMM dd, yyyy, hh:mm a')
        }));

        return {
            total,
            totalPages,
            currentPage: page,
            rewards: formattedRewards,
        };
    }

    async approveRewards(adminId: number, rewardIds: number[]) {
        const results = [];
        for (const rewardId of rewardIds) {
            const reward = await this.prisma.myReward.findUnique({ where: { id: rewardId } });
            if (!reward) {
                results.push({ rewardId, error: 'Reward not found' });
                continue;
            }
            if (reward.status === RewardStatus.REJECTED) {
                results.push({ rewardId, error: 'Cannot approve a rejected reward' });
                continue;
            }
            if (reward.status === RewardStatus.APPROVED) {
                results.push({ rewardId, error: 'Reward is already approved' });
                continue;
            }
            const updated = await this.prisma.myReward.update({
                where: { id: rewardId },
                data: {
                    status: RewardStatus.APPROVED,
                    date: new Date(),
                },
            });
            results.push({ rewardId, updated });
        }
        return results;
    }

    async rejectRewards(adminId: number, rewardIds: number[], note?: string) {
        const results = [];
        for (const rewardId of rewardIds) {
            const reward = await this.prisma.myReward.findUnique({
                where: { id: rewardId },
                include: { user: true },
            });
            if (!reward) {
                results.push({ rewardId, error: 'Reward not found' });
                continue;
            }
            if (reward.status === RewardStatus.APPROVED) {
                results.push({ rewardId, error: 'Cannot reject an approved reward' });
                continue;
            }
            if (reward.status === RewardStatus.REJECTED) {
                results.push({ rewardId, error: 'Reward is already rejected' });
                continue;
            }
            await this.prisma.user.update({
                where: { id: reward.userId },
                data: { points: reward.user.points + reward.points },
            });
            const updated = await this.prisma.myReward.update({
                where: { id: rewardId },
                data: {
                    status: RewardStatus.REJECTED,
                    note: note || null,
                    date: new Date(),
                },
            });
            results.push({ rewardId, updated });
        }
        return results;
    }

    async deleteRewards(adminId: number, rewardIds: number[]) {
        if (!rewardIds || rewardIds.length === 0) {
            throw new ForbiddenException('No reward IDs provided');
        }

        const results = [];
        for (const rewardId of rewardIds) {
            const reward = await this.prisma.myReward.findUnique({ where: { id: rewardId } });
            if (!reward) {
                results.push({ rewardId, error: 'Reward not found' });
                continue;
            }
            await this.prisma.myReward.delete({ where: { id: rewardId } });
            results.push({ rewardId, deleted: true });
        }

        return { message: 'Delete process completed', results };
    }
}