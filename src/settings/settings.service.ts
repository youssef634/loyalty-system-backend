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
        return this.prisma.settings.findUnique({ where: { id: 1 } });
    }

    async updateSettings(currentUserId: number, body: any) {
        await this.checkAdmin(currentUserId); // ensure only admins can do this

        const { timezone, pointsPerDollar, pointsPerIQD } = body;

        return this.prisma.settings.upsert({
            where: { id: 1 }, // assuming we only ever have one settings row
            update: {
                timezone: timezone || undefined,
                pointsPerDollar: pointsPerDollar || undefined,
                pointsPerIQD: pointsPerIQD || undefined,
            },
            create: {
                timezone: timezone || "UTC",
                pointsPerDollar: pointsPerDollar || 10,
                pointsPerIQD: pointsPerIQD || 1,
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