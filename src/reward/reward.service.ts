import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service/prisma.service';
import { RewardStatus } from '@prisma/client';
import { DateTime } from 'luxon';

@Injectable()
export class RewardService {
    constructor(private prisma: PrismaService) { }

    private async checkAdmin(userId: number) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user || user.role !== 'ADMIN') {
            throw new ForbiddenException('Admins only');
        }
    }

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
        }
    ) {
        const user = await this.prisma.user.findUnique({ where: { id: currentUserId } });
        if (!user) throw new ForbiddenException('User not found');

        const isAdmin = user.role === 'ADMIN';

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

        // If not admin → restrict to current user's rewards
        if (!isAdmin) {
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
            orderBy: { date: 'desc' },
            include: {
                user: isAdmin ? { select: { enName: true, arName: true } } : false,
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

    async approveReward(adminId: number, rewardId: number) {
        await this.checkAdmin(adminId);

        const reward = await this.prisma.myReward.findUnique({ where: { id: rewardId } });
        if (!reward) throw new NotFoundException('Reward not found');
        if (reward.status === RewardStatus.REJECTED) {
            throw new ForbiddenException('Cannot approve a rejected reward');
        }
        if (reward.status === RewardStatus.APPROVED) {
            throw new ForbiddenException('Reward is already approved');
        }

        return this.prisma.myReward.update({
            where: { id: rewardId },
            data: {
                status: RewardStatus.APPROVED,
                date: new Date(), // update date when status changes
            },
        });
    }

    async rejectReward(adminId: number, rewardId: number, note?: string) {
        await this.checkAdmin(adminId);

        const reward = await this.prisma.myReward.findUnique({
            where: { id: rewardId },
            include: { user: true },
        });
        if (!reward) throw new NotFoundException('Reward not found');
        if (reward.status === RewardStatus.APPROVED) {
            throw new ForbiddenException('Cannot reject an approved reward');
        }
        if (reward.status === RewardStatus.REJECTED) {
            throw new ForbiddenException('Reward is already rejected');
        }

        // Return points to user
        await this.prisma.user.update({
            where: { id: reward.userId },
            data: { points: reward.user.points + reward.points },
        });

        return this.prisma.myReward.update({
            where: { id: rewardId },
            data: {
                status: RewardStatus.REJECTED,
                note: note || null,
                date: new Date(), // update date
            },
        });
    }

    async approveRewards(adminId: number, rewardIds: number[]) {
        await this.checkAdmin(adminId);

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
        await this.checkAdmin(adminId);

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
}