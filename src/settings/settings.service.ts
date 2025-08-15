import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service/prisma.service';

@Injectable()
export class SettingsService {
    constructor(private prisma: PrismaService) { }

    async checkAdmin(userId: number) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user || user.role !== 'ADMIN') {
            throw new ForbiddenException('Only admin can access settings');
        }
    }

    async getSettings(userId: number) {
        await this.checkAdmin(userId);
        const settings = await this.prisma.settings.findUnique({ where: { id: 1 } });
        return {
            ...settings,
            currency: settings.pointsPerDollar > 0 ? 'USD' : 'IQD'
        };
    }

    async updateSettings(currentUserId: number, body: { timezone?: string; pointsPerDollar?: number; pointsPerIQD?: number; currency?: 'USD' | 'IQD' }) {
        await this.checkAdmin(currentUserId); // ensure only admins can do this

        const { timezone, pointsPerDollar, pointsPerIQD, currency } = body;

        // Set points based on currency and provided values
        let updatedPointsPerDollar = pointsPerDollar;
        let updatedPointsPerIQD = pointsPerIQD;

        if (currency === 'USD') {
            updatedPointsPerDollar = pointsPerDollar || updatedPointsPerDollar;
            updatedPointsPerIQD = 0;
        } else if (currency === 'IQD') {
            updatedPointsPerDollar = 0;
            updatedPointsPerIQD = pointsPerIQD || updatedPointsPerIQD;
        }

        return this.prisma.settings.upsert({
            where: { id: 1 }, // assuming we only ever have one settings row
            update: {
                timezone: timezone || undefined,
                pointsPerDollar: updatedPointsPerDollar !== undefined ? parseInt(String(updatedPointsPerDollar)) : undefined,
                pointsPerIQD: updatedPointsPerIQD !== undefined ? parseInt(String(updatedPointsPerIQD)) : undefined,
            },
            create: {
                timezone: timezone || "UTC",
                pointsPerDollar: updatedPointsPerDollar !== undefined ? parseInt(String(updatedPointsPerDollar)) : 10,
                pointsPerIQD: updatedPointsPerIQD !== undefined ? parseInt(String(updatedPointsPerIQD)) : 1,
            },
        });
    }

    async convertPoints(amount: number, currency: 'USD' | 'IQD') {
        const settings = await this.prisma.settings.findUnique({ where: { id: 1 } });
        if (!settings) throw new Error('Settings not configured');

        if (currency === 'USD') {
            return amount * settings.pointsPerDollar;
        } else {
            return amount * settings.pointsPerIQD;
        }
    }
}