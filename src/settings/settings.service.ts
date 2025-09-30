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

        const {
            timezone,
            enCurrency,
            arCurrency,
            usdToIqd,
            pointsPerDollar,
            pointsPerIQD,
            printerType,
            printerIp,
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
            const allSettings = await this.prisma.settings.findMany();

            const updatedSettings = [];

            for (const s of allSettings) {
                // Delete old image if new image is uploaded
                if (imageUrl && s.imgUrl && s.imgUrl.startsWith('http://localhost:3000/uploads/settings/')) {
                    const oldImagePath = path.join(uploadDir, path.basename(s.imgUrl));
                    if (fs.existsSync(oldImagePath)) fs.unlinkSync(oldImagePath);
                }

                const updated = await this.prisma.settings.update({
                    where: { id: s.id },
                    data: {
                        enTitle: enTitle || s.enTitle,
                        arTitle: arTitle || s.arTitle,
                        enDescription: enDescription || s.enDescription,
                        arDescription: arDescription || s.arDescription,
                        imgUrl: imageUrl || s.imgUrl,
                        timezone: timezone || s.timezone,
                        enCurrency: enCurrency || s.enCurrency,
                        arCurrency: arCurrency || s.arCurrency,
                        usdToIqd: usdToIqd || s.usdToIqd,
                        pointsPerDollar: pointsPerDollar || s.pointsPerDollar,
                        pointsPerIQD: pointsPerIQD || s.pointsPerIQD,
                        printerType: printerType || s.printerType,
                        printerIp: printerType === 'LAN' ? printerIp : s.printerIp,
                    },
                });
            }

            const globalSettings = await this.prisma.settings.findUnique({ where: { id: 1 } });
            return globalSettings;

        } else {
            // Regular users can only update timezone
            if (!timezone) throw new ForbiddenException('Only timezone can be updated');

            const settings = await this.prisma.settings.findUnique({ where: { userId } });
            if (!settings) throw new ForbiddenException('Settings not found');

            return this.prisma.settings.update({
                where: { userId },
                data: { timezone },
            });
        }
    }
}