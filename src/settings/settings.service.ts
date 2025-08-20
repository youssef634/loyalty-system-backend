import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service/prisma.service';

@Injectable()
export class SettingsService {
    constructor(private prisma: PrismaService) { }

    async getSettings(userId: number) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user) throw new ForbiddenException('User not found');

        if (user.role === 'ADMIN') {
            // Admin gets all settings
            return this.prisma.settings.findUnique({ where: { id: 1 } });
        } else {
            // User gets their own settings if exists
            let settings = await this.prisma.settings.findUnique({ where: { userId } });
            if (!settings) {
                // If not exist, return admin settings (id: 1)
                settings = await this.prisma.settings.findUnique({ where: { id: 1 } });
            }
            return settings;
        }
    }

    async updateSettings(userId: number, body: any) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user) throw new ForbiddenException('User not found');

        if (user.role === 'ADMIN') {
            // Admin updates global settings (id: 1)
            const { timezone, enCurrency, arCurrency, pointsPerDollar, pointsPerIQD } = body;
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
                    user: {
                        connect: { id: userId }
                    }
                },
            });
        } else {
            // User can only update their timezone
            const { timezone } = body;
            if (!timezone) throw new ForbiddenException('Only timezone can be updated');
            let settings = await this.prisma.settings.findUnique({ where: { userId } });
            if (!settings) {
                // Copy admin settings, but set user's timezone
                const adminSettings = await this.prisma.settings.findUnique({ where: { id: 1 } });
                if (!adminSettings) throw new ForbiddenException('Admin settings not found');
                return this.prisma.settings.create({
                    data: {
                        userId,
                        timezone,
                        enCurrency: adminSettings.enCurrency,
                        arCurrency: adminSettings.arCurrency,
                        pointsPerDollar: adminSettings.pointsPerDollar,
                        pointsPerIQD: adminSettings.pointsPerIQD,
                    },
                });
            }
            return this.prisma.settings.update({
                where: { userId },
                data: { timezone },
            });
        }
    }
}