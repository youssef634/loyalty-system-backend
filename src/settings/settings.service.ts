import { Injectable, ForbiddenException, Logger } from '@nestjs/common';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../connection/connection.service';
import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';

@Injectable()
export class SettingsService {
    private readonly logger = new Logger(SettingsService.name);

    constructor(
        private cloudPrisma: CloudPrismaService,
        private localPrisma: LocalPrismaService,
        private connectionService: ConnectionService,
    ) { }

    private getSettingsUploadPath() {
        const uploadDir = path.join(process.cwd(), 'uploads/settings');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        return uploadDir;
    }

    async getSettings(userId: number) {
        const isOnline = this.connectionService.getConnectionStatus();

        if (isOnline) {
            return await this.getSettingsCloud(userId);
        } else {
            return await this.getSettingsLocal(userId);
        }
    }

    private async getSettingsCloud(userId: number) {
        const user = await this.cloudPrisma.user.findUnique({ where: { id: userId } });
        if (!user) throw new ForbiddenException('User not found');

        if (user.role !== 'USER') {
            return this.cloudPrisma.settings.findUnique({
                where: { id: 1 }
            });
        } else {
            let settings = await this.cloudPrisma.settings.findUnique({ where: { userId } });
            if (!settings) {
                settings = await this.cloudPrisma.settings.findUnique({
                    where: { id: 1 }
                });
            }
            return settings;
        }
    }

    private async getSettingsLocal(userId: number) {
        const user = await this.localPrisma.user.findUnique({ where: { id: userId } });
        if (!user) throw new ForbiddenException('User not found');

        if (user.role !== 'USER') {
            return this.localPrisma.settings.findUnique({
                where: { id: 1 }
            });
        } else {
            let settings = await this.localPrisma.settings.findUnique({ where: { userId } });
            if (!settings) {
                settings = await this.localPrisma.settings.findUnique({
                    where: { id: 1 }
                });
            }
            return settings;
        }
    }

    async updateSettings(
        userId: number,
        body: any,
        file?: Express.Multer.File,
    ) {
        const isOnline = this.connectionService.getConnectionStatus();

        if (!isOnline) {
            throw new ForbiddenException('Settings updates require internet connection');
        }

        const user = await this.cloudPrisma.user.findUnique({ where: { id: userId } });
        if (!user) throw new ForbiddenException('User not found');

        const {
            timezone,
            enCurrency,
            arCurrency,
            usdToIqd,
            pointsPerDollar,
            pointsPerIQD,
            printerType,
            printerIp,
            port,
            enTitle,
            arTitle,
            enDescription,
            arDescription,
            image,
        } = body;

        const uploadDir = this.getSettingsUploadPath();
        let imageUrl: string | undefined;

        // Handle image upload
        if (file) {
            const fileName = `${Date.now()}_${file.originalname}`;
            const filePath = path.join(uploadDir, fileName);
            fs.writeFileSync(filePath, file.buffer);
            imageUrl = `http://localhost:3000/uploads/settings/${fileName}`;
        } else if (image && /^data:(image\/[a-z]+)?;base64,/.test(image)) {
            const matches = image.match(/^data:(image\/[a-z]+)?;base64,(.+)$/);
            const ext = matches?.[1]?.split('/')[1] || 'jpg';
            const base64Data = matches?.[2] || '';
            const fileName = `${Date.now()}_base64.${ext}`;
            const filePath = path.join(uploadDir, fileName);
            fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
            imageUrl = `http://localhost:3000/uploads/settings/${fileName}`;
        } else if (image && /^https?:\/\//i.test(image)) {
            const response = await axios.get(image, { responseType: 'arraybuffer' });
            const ext = response.headers['content-type']?.split('/')[1] || 'jpg';
            const fileName = `${Date.now()}_url.${ext}`;
            const filePath = path.join(uploadDir, fileName);
            fs.writeFileSync(filePath, response.data);
            imageUrl = `http://localhost:3000/uploads/settings/${fileName}`;
        } else if (image && image.startsWith('http://localhost:3000/uploads/settings/')) {
            imageUrl = image;
        }

        if (user.role !== 'USER') {
            // Admin updates global settings → apply to ALL users
            const allSettings = await this.cloudPrisma.settings.findMany();

            for (const s of allSettings) {
                // Delete old image if new image is uploaded
                if (imageUrl && s.imgUrl && s.imgUrl.startsWith('http://localhost:3000/uploads/settings/')) {
                    const oldImagePath = path.join(uploadDir, path.basename(s.imgUrl));
                    if (fs.existsSync(oldImagePath)) fs.unlinkSync(oldImagePath);
                }

                const updateData = {
                    enTitle: enTitle || s.enTitle,
                    arTitle: arTitle || s.arTitle,
                    enDescription: enDescription || s.enDescription,
                    arDescription: arDescription || s.arDescription,
                    imgUrl: imageUrl || s.imgUrl,
                    timezone: timezone || s.timezone,
                    enCurrency: enCurrency || s.enCurrency,
                    arCurrency: arCurrency || s.arCurrency,
                    usdToIqd: usdToIqd ? parseFloat(usdToIqd) : s.usdToIqd,
                    pointsPerDollar: pointsPerDollar ? parseFloat(pointsPerDollar) : s.pointsPerDollar,
                    pointsPerIQD: pointsPerIQD ? parseFloat(pointsPerIQD) : s.pointsPerIQD,
                    printerType: printerType || s.printerType,
                    printerIp: printerType === 'LAN' ? printerIp : s.printerIp,
                    port: printerType === 'LAN' && port ? parseInt(port) : s.port,
                };

                await this.cloudPrisma.settings.update({
                    where: { id: s.id },
                    data: updateData,
                });

                // ✅ Update log
                try {
                    await this.cloudPrisma.updateLog.create({
                        data: {
                            userId: userId,
                            screen: 'settings',
                            enMessage: `${user.enName} updated settings`,
                            arMessage: `${user.arName} تحديث الإعدادات`,
                        }
                    });
                } catch (err) {
                    this.logger.warn(`⚠️ Failed to create update log: ${err}`);
                }

                // Sync to local database
                try {
                    await this.localPrisma.settings.update({
                        where: { id: s.id },
                        data: updateData,
                    });
                    this.logger.log(`Settings ${s.id} synced to local database`);
                } catch (error) {
                    this.logger.warn(`Failed to sync settings ${s.id} to local DB: ${error}`);
                }
            }

            const globalSettings = await this.cloudPrisma.settings.findUnique({ where: { id: 1 } });
            return globalSettings;

        } else {
            // Regular users can only update timezone
            if (!timezone) throw new ForbiddenException('Only timezone can be updated');

            const settings = await this.cloudPrisma.settings.findUnique({ where: { userId } });
            if (!settings) throw new ForbiddenException('Settings not found');

            const updated = await this.cloudPrisma.settings.update({
                where: { userId },
                data: { timezone },
            });

            // Sync to local
            try {
                await this.localPrisma.settings.update({
                    where: { userId },
                    data: { timezone },
                });
                this.logger.log(`User ${userId} timezone synced to local database`);
            } catch (error) {
                this.logger.warn(`Failed to sync timezone to local DB: ${error}`);
            }

            return updated;
        }
    }
}