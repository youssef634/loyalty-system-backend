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
        await this.checkAdmin(currentUserId);

        const { timezone, enCurrency , arCurrency , pointsPerDollar, pointsPerIQD } = body;

        return this.prisma.settings.upsert({
            where: { id: 1 }, 
            update: {
                timezone: timezone || undefined,
                enCurrency: enCurrency || undefined,
                arCurrency: arCurrency || undefined,
                pointsPerDollar: pointsPerDollar || undefined,
                pointsPerIQD: pointsPerIQD || undefined,
            },
            create: {
                timezone: timezone || "UTC",
                enCurrency: enCurrency || "USD",
                arCurrency: arCurrency || "الدولار الأمريكي",
                pointsPerDollar: pointsPerDollar || 10,
                pointsPerIQD: pointsPerIQD || 1,
            },
        });
    }
}