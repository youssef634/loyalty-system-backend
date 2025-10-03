import { Injectable, NotFoundException, ForbiddenException, Logger } from '@nestjs/common';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../connection/connection.service';
import { RewardStatus } from '@prisma/client';
import { DateTime } from 'luxon';

@Injectable()
export class RewardService {
    private readonly logger = new Logger(RewardService.name);

    constructor(
        private cloudPrisma: CloudPrismaService,
        private localPrisma: LocalPrismaService,
        private connectionService: ConnectionService,
    ) { }

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
        const isOnline = await this.connectionService.checkConnection();

        if (isOnline) {
            this.logger.log('🌐 Fetching rewards from CLOUD database');
            return await this.getRewardsFromCloud(currentUserId, page, searchFilters);
        } else {
            this.logger.warn('📴 OFFLINE mode - Fetching rewards from LOCAL database');
            return await this.getRewardsFromLocal(currentUserId, page, searchFilters);
        }
    }

    private async getRewardsFromCloud(
        currentUserId: number,
        page: number,
        searchFilters?: any
    ) {
        const user = await this.cloudPrisma.user.findUnique({ where: { id: currentUserId } });
        if (!user) throw new ForbiddenException('User not found');

        const isUser = user.role === 'USER';

        // Get timezone from settings
        let settings = await this.cloudPrisma.settings.findUnique({ where: { userId: currentUserId } });
        if (!settings) {
            settings = await this.cloudPrisma.settings.findUnique({ where: { id: 1 } });
            if (!settings) throw new NotFoundException('Admin settings not found');
        }
        const timezone = settings?.timezone || 'UTC';

        const limit = searchFilters?.limit && searchFilters.limit > 0 ? searchFilters.limit : 10;
        const filters: any = {};

        // Apply filters
        if (searchFilters?.id) filters.id = searchFilters.id;
        if (searchFilters?.type) filters.type = { contains: searchFilters.type, mode: 'insensitive' };
        if (searchFilters?.status) filters.status = { equals: searchFilters.status };

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
        let orderBy: any = this.buildOrderBy(searchFilters);

        if (isUser) {
            filters.userId = currentUserId;
        }

        const total = await this.cloudPrisma.myReward.count({ where: filters });
        const totalPages = Math.ceil(total / limit);
        if (page > totalPages && total > 0) throw new NotFoundException('Page not found');

        const skip = (page - 1) * limit;

        const rewards = await this.cloudPrisma.myReward.findMany({
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
            source: 'cloud',
        };
    }

    private async getRewardsFromLocal(
        currentUserId: number,
        page: number,
        searchFilters?: any
    ) {
        const user = await this.localPrisma.user.findUnique({ where: { id: currentUserId } });
        if (!user) throw new ForbiddenException('User not found');

        const isUser = user.role === 'USER';

        // Get timezone from settings
        let settings = await this.localPrisma.settings.findUnique({ where: { userId: currentUserId } });
        if (!settings) {
            settings = await this.localPrisma.settings.findUnique({ where: { id: 1 } });
            if (!settings) throw new NotFoundException('Admin settings not found');
        }
        const timezone = settings?.timezone || 'UTC';

        const limit = searchFilters?.limit && searchFilters.limit > 0 ? searchFilters.limit : 10;
        const filters: any = {};

        // Apply filters
        if (searchFilters?.id) filters.id = searchFilters.id;
        if (searchFilters?.type) filters.type = { contains: searchFilters.type, mode: 'insensitive' };
        if (searchFilters?.status) filters.status = { equals: searchFilters.status };

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
        let orderBy: any = this.buildOrderBy(searchFilters);

        if (isUser) {
            filters.userId = currentUserId;
        }

        const total = await this.localPrisma.myReward.count({ where: filters });
        const totalPages = Math.ceil(total / limit);
        if (page > totalPages && total > 0) throw new NotFoundException('Page not found');

        const skip = (page - 1) * limit;

        const rewards = await this.localPrisma.myReward.findMany({
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
            source: 'local',
        };
    }

    private buildOrderBy(searchFilters?: any): any {
        if (!searchFilters?.sortBy) {
            return { id: 'asc' };
        }

        if (searchFilters.sortBy === 'user.name') {
            return {
                user: {
                    enName: searchFilters.sortOrder === 'asc' ? 'asc' : 'desc'
                }
            };
        }

        if (searchFilters.sortBy === 'product.name') {
            return [
                { cafeProduct: { enName: searchFilters.sortOrder === 'asc' ? 'asc' : 'desc' } },
                { restaurantProduct: { enName: searchFilters.sortOrder === 'asc' ? 'asc' : 'desc' } }
            ];
        }

        if (['id', 'type', 'status', 'points', 'date', 'userId'].includes(searchFilters.sortBy)) {
            return { [searchFilters.sortBy]: searchFilters.sortOrder === 'asc' ? 'asc' : 'desc' };
        }

        return { date: searchFilters.sortOrder === 'asc' ? 'asc' : 'desc' };
    }

    async approveRewards(adminId: number, rewardIds: number[]) {
        const isOnline = await this.connectionService.checkConnection();

        if (isOnline) {
            this.logger.log('🌐 Approving rewards in CLOUD database');
            return await this.approveRewardsInCloud(adminId, rewardIds);
        } else {
            this.logger.warn('📴 OFFLINE mode - Approving rewards in LOCAL database');
            return await this.approveRewardsInLocal(adminId, rewardIds);
        }
    }

    private async approveRewardsInCloud(adminId: number, rewardIds: number[]) {

        const currentUser = await this.cloudPrisma.user.findUnique({ where: { id: adminId } });
        if (!currentUser) throw new NotFoundException('User not found');

        const results = [];
        for (const rewardId of rewardIds) {
            const reward = await this.cloudPrisma.myReward.findUnique({ where: { id: rewardId } });
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

            const updated = await this.cloudPrisma.myReward.update({
                where: { id: rewardId },
                data: {
                    status: RewardStatus.APPROVED,
                    date: new Date(),
                },
            });

            // ✅ Update log
            try {
                const rewardOwner = await this.cloudPrisma.user.findUnique({
                    where: { id: reward.userId },
                    select: { enName: true }
                });

                await this.cloudPrisma.updateLog.create({
                    data: {
                        userId: adminId,
                        userName: currentUser.enName,
                        screen: 'rewards',
                        message: `Reward #${reward.id} (${rewardOwner?.enName ?? 'Unknown user'}) was approved by ${currentUser.enName}`,
                    }
                });
            } catch (err) {
                this.logger.warn(`⚠️ Failed to create update log: ${err}`);
            }

            // Sync to local
            try {
                await this.localPrisma.myReward.update({
                    where: { id: rewardId },
                    data: {
                        status: RewardStatus.APPROVED,
                        date: updated.date,
                        synced: true,
                    },
                });
            } catch (error) {
                this.logger.warn(`Failed to sync reward ${rewardId} to local: ${error}`);
            }

            results.push({ rewardId, updated });
        }
        return { results, source: 'cloud' };
    }

    private async approveRewardsInLocal(adminId: number, rewardIds: number[]) {
        const results = [];
        for (const rewardId of rewardIds) {
            const reward = await this.localPrisma.myReward.findUnique({ where: { id: rewardId } });
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

            const updated = await this.localPrisma.myReward.update({
                where: { id: rewardId },
                data: {
                    status: RewardStatus.APPROVED,
                    date: new Date(),
                    synced: false,
                },
            });

            results.push({ rewardId, updated });
        }

        this.logger.warn(`📴 ${results.length} rewards approved locally - will sync when online`);
        return { results, source: 'local' };
    }

    async rejectRewards(adminId: number, rewardIds: number[], note?: string) {
        const isOnline = await this.connectionService.checkConnection();

        if (isOnline) {
            this.logger.log('🌐 Rejecting rewards in CLOUD database');
            return await this.rejectRewardsInCloud(adminId, rewardIds, note);
        } else {
            this.logger.warn('📴 OFFLINE mode - Rejecting rewards in LOCAL database');
            return await this.rejectRewardsInLocal(adminId, rewardIds, note);
        }
    }

    private async rejectRewardsInCloud(adminId: number, rewardIds: number[], note?: string) {

        const currentUser = await this.cloudPrisma.user.findUnique({ where: { id: adminId } });
        if (!currentUser) throw new NotFoundException('User not found');

        const results = [];
        for (const rewardId of rewardIds) {
            const reward = await this.cloudPrisma.myReward.findUnique({
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

            await this.cloudPrisma.user.update({
                where: { id: reward.userId },
                data: { points: reward.user.points + reward.points },
            });

            const updated = await this.cloudPrisma.myReward.update({
                where: { id: rewardId },
                data: {
                    status: RewardStatus.REJECTED,
                    note: note || null,
                    date: new Date(),
                },
            });

            // ✅ Update log
            try {
                const rewardOwner = await this.cloudPrisma.user.findUnique({
                    where: { id: reward.userId },
                    select: { enName: true }
                });

                await this.cloudPrisma.updateLog.create({
                    data: {
                        userId: adminId,
                        userName: currentUser.enName,
                        screen: 'rewards',
                        message: `Reward #${reward.id} (${rewardOwner?.enName ?? 'Unknown user'}) was rejected by ${currentUser.enName}`,
                    }
                });
            } catch (err) {
                this.logger.warn(`⚠️ Failed to create update log: ${err}`);
            }

            // Sync to local
            try {
                await this.localPrisma.myReward.update({
                    where: { id: rewardId },
                    data: {
                        status: RewardStatus.REJECTED,
                        note: note || null,
                        date: updated.date,
                        synced: true,
                    },
                });

                await this.localPrisma.user.update({
                    where: { id: reward.userId },
                    data: { points: reward.user.points + reward.points },
                });
            } catch (error) {
                this.logger.warn(`Failed to sync reward ${rewardId} to local: ${error}`);
            }

            results.push({ rewardId, updated });
        }
        return { results, source: 'cloud' };
    }

    private async rejectRewardsInLocal(adminId: number, rewardIds: number[], note?: string) {
        const results = [];
        for (const rewardId of rewardIds) {
            const reward = await this.localPrisma.myReward.findUnique({
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

            await this.localPrisma.user.update({
                where: { id: reward.userId },
                data: { points: reward.user.points + reward.points },
            });

            const updated = await this.localPrisma.myReward.update({
                where: { id: rewardId },
                data: {
                    status: RewardStatus.REJECTED,
                    note: note || null,
                    date: new Date(),
                    synced: false,
                },
            });

            results.push({ rewardId, updated });
        }

        this.logger.warn(`📴 ${results.length} rewards rejected locally - will sync when online`);
        return { results, source: 'local' };
    }

    async deleteRewards(adminId: number, rewardIds: number[]) {
        if (!rewardIds || rewardIds.length === 0) {
            throw new ForbiddenException('No reward IDs provided');
        }

        const isOnline = await this.connectionService.checkConnection();

        if (isOnline) {
            this.logger.log('🌐 Deleting rewards from CLOUD database');
            return await this.deleteRewardsFromCloud(adminId, rewardIds);
        } else {
            this.logger.warn('cannot delete rewards while offline');
        }
    }

    private async deleteRewardsFromCloud(adminId: number, rewardIds: number[]) {

        const currentUser = await this.cloudPrisma.user.findUnique({ where: { id: adminId } });
        if (!currentUser) throw new NotFoundException('User not found');

        const results = [];
        for (const rewardId of rewardIds) {
            const reward = await this.cloudPrisma.myReward.findUnique({ where: { id: rewardId } });
            if (!reward) {
                results.push({ rewardId, error: 'Reward not found' });
                continue;
            }

            await this.cloudPrisma.myReward.delete({ where: { id: rewardId } });

            // ✅ Update log
            try {
                const rewardOwner = await this.cloudPrisma.user.findUnique({
                    where: { id: reward.userId },
                    select: { enName: true }
                });

                await this.cloudPrisma.deleteLog.create({
                    data: {
                        userId: adminId,
                        userName: currentUser.enName,
                        screen: 'rewards',
                        message: `Reward #${reward.id} (${rewardOwner?.enName ?? 'Unknown user'}) was deleted by ${currentUser.enName}`,
                    }
                });
            } catch (err) {
                this.logger.warn(`⚠️ Failed to create delete log: ${err}`);
            }


            // Sync to local
            try {
                await this.localPrisma.myReward.delete({ where: { id: rewardId } });
            } catch (error) {
                this.logger.warn(`Failed to delete reward ${rewardId} from local: ${error}`);
            }

            results.push({ rewardId, deleted: true });
        }

        return { message: 'Delete process completed', results, source: 'cloud' };
    }
}