import { Injectable, ForbiddenException } from '@nestjs/common';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';

@Injectable()
export class SettingsService {
    constructor(private prisma: CloudPrismaService) { }

    private getSettingsUploadPath() {
        const uploadDir = path.join(process.cwd(), 'uploads/settings');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        return uploadDir;
    }

    async getSettings(userId: number) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user) throw new ForbiddenException('User not found');

        if (user.role !== 'USER') {
            // Admin gets global settings (any admin's settings)
            return this.prisma.settings.findUnique({
                where: { id: 1 }
            });
        } else {
            // User gets their own settings if exists
            let settings = await this.prisma.settings.findUnique({ where: { userId } });
            if (!settings) {
                // If not exist, return global admin settings
                settings = await this.prisma.settings.findUnique({
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
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user) throw new ForbiddenException('User not found');

        // Extract new fields
        const {
            timezone,
            enCurrency,
            arCurrency,
            usdToIqd,
            pointsPerDollar,
            pointsPerIQD,
            printerType,
            printerIp,
            title,
            description,
            image,
        } = body;

        // ✅ Handle image upload like addProduct
        let imageUrl: string | undefined;
        const uploadDir = this.getSettingsUploadPath();

        if (file) {
            const fileName = `${Date.now()}_${file.originalname}`;
            const filePath = path.join(uploadDir, fileName);
            fs.writeFileSync(filePath, file.buffer);
            imageUrl = `http://localhost:3000/uploads/settings/${fileName}`;
        } else if (image && /^data:image\/[a-z]+;base64,/.test(image)) {
            const matches = image.match(/^data:image\/([a-z]+);base64,(.+)$/);
            const ext = matches ? matches[1] : 'jpg';
            const base64Data = matches ? matches[2] : '';
            const fileName = `${Date.now()}_base64.${ext}`;
            const filePath = path.join(uploadDir, fileName);
            fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
            imageUrl = `http://localhost:3000/uploads/settings/${fileName}`;
        } else if (
            image &&
            /^https?:\/\//i.test(image) &&
            !image.startsWith('http://localhost:3000/uploads/settings/')
        ) {
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
            // ✅ Admin updates global settings
            const existingGlobalSettings = await this.prisma.settings.findFirst({
                where: { user: { role: 'ADMIN' } },
            });

            if (existingGlobalSettings) {
                return this.prisma.settings.update({
                    where: { id: existingGlobalSettings.id },
                    data: {
                        timezone: timezone || undefined,
                        enCurrency: enCurrency || undefined,
                        arCurrency: arCurrency || undefined,
                        usdToIqd: usdToIqd || undefined,
                        pointsPerDollar: pointsPerDollar || undefined,
                        pointsPerIQD: pointsPerIQD || undefined,
                        printerType: printerType || undefined,
                        printerIp: printerType === 'LAN' ? printerIp : null,
                        title: title || undefined,
                        description: description || undefined,
                        imgUrl: imageUrl || undefined,
                    },
                });
            } else {
                return this.prisma.settings.create({
                    data: {
                        userId,
                        timezone,
                        enCurrency,
                        arCurrency,
                        usdToIqd,
                        pointsPerDollar,
                        pointsPerIQD,
                        printerType: printerType || 'USB',
                        printerIp: printerType === 'LAN' ? printerIp : null,
                        title,
                        description,
                        imgUrl: imageUrl,
                    },
                });
            }
        } else {
            // ✅ User can only update timezone
            if (!timezone) throw new ForbiddenException('Only timezone can be updated');

            let settings = await this.prisma.settings.findUnique({ where: { userId } });
            if (!settings) {
                const adminSettings = await this.prisma.settings.findFirst({
                    where: { user: { role: 'ADMIN' } },
                });
                if (!adminSettings) throw new ForbiddenException('Admin settings not found');
                return this.prisma.settings.create({
                    data: {
                        userId,
                        timezone,
                        enCurrency: adminSettings.enCurrency,
                        arCurrency: adminSettings.arCurrency,
                        usdToIqd: adminSettings.usdToIqd,
                        pointsPerDollar: adminSettings.pointsPerDollar,
                        pointsPerIQD: adminSettings.pointsPerIQD,
                        printerType: adminSettings.printerType,
                        printerIp: adminSettings.printerIp,
                        title: adminSettings.title,
                        description: adminSettings.description,
                        imgUrl: adminSettings.imgUrl,
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
