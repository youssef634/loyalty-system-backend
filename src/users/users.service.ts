import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
import * as bcrypt from 'bcrypt';
import * as QRCode from 'qrcode';
import * as fs from 'fs';
import * as path from 'path';
import { DateTime } from 'luxon';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    private getQrUploadPath() {
        const uploadDir = path.join(process.cwd(), 'uploads', 'qrcodes');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        return uploadDir;
    }

    private async generateUserQrPng(userId: number, email: string): Promise<string> {
        const uploadDir = this.getQrUploadPath();
        const fileName = `${email}.png`;
        const filePath = path.join(uploadDir, fileName);

        const qrPayload = JSON.stringify({ id: userId, email });
        await QRCode.toFile(filePath, qrPayload);

        return `http://localhost:3000/uploads/qrcodes/${fileName}`;
    }

    async addUser(currentUserId: number, data: CreateUserDto) {

        const existingUser = await this.prisma.user.findFirst({
            where: { OR: [{ email: data.email }, { phone: data.phone }] },
        });
        if (existingUser) throw new BadRequestException('User with this email or phone already exists');

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const newUser = await this.prisma.user.create({
            data: {
                enName: data.enName,
                arName: data.arName,
                phone: data.phone,
                email: data.email,
                password: hashedPassword,
                role: 'USER',
                points: Number(data.points) || 0,
                createdAt: new Date()
            },
        });

        // Generate and store QR code as base64
        const qrCode = await this.generateUserQrPng(newUser.id, newUser.email);
        return this.prisma.user.update({
            where: { id: newUser.id },
            data: { qrCode: qrCode },
            select: {
                id: true,
                enName: true,
                arName: true,
                phone: true,
                email: true,
                role: true,
                points: true,
                profileImage: true,
                qrCode: true,
                createdAt: true
            }
        });
    }

    async getAllUsers(
        currentUserId: number,
        page: number = 1,
        searchFilters?: {
            limit?: number;
            id?: number;
            enName?: string;
            arName?: string;
            email?: string;
            phone?: string;
        },
    ) {
        // Get timezone from settings
        let settings = await this.prisma.settings.findUnique({ where: { userId: currentUserId } });
        if (!settings) {
            settings = await this.prisma.settings.findUnique({ where: { id: 1 } });
            if (!settings) throw new NotFoundException('Admin settings not found');
        }
        const timezone = settings?.timezone || 'UTC';

        const limit = searchFilters?.limit && searchFilters.limit > 0 ? searchFilters.limit : 10;
        const filters: any = { role: 'USER' };

        if (searchFilters?.id) filters.id = searchFilters.id;
        if (searchFilters?.enName) filters.enName = { contains: searchFilters.enName, mode: 'insensitive' };
        if (searchFilters?.arName) filters.arName = { contains: searchFilters.arName, mode: 'insensitive' };
        if (searchFilters?.email) filters.email = { contains: searchFilters.email, mode: 'insensitive' };
        if (searchFilters?.phone) filters.phone = { contains: searchFilters.phone, mode: 'insensitive' };

        const totalUsers = await this.prisma.user.count({ where: filters });
        const totalPages = Math.ceil(totalUsers / limit);
        if (page > totalPages && totalUsers > 0) throw new NotFoundException('Page not found');

        const skip = (page - 1) * limit;
        const users = await this.prisma.user.findMany({
            where: filters,
            skip,
            take: limit,
            select: {
                id: true,
                enName: true,
                arName: true,
                email: true,
                phone: true,
                role: true,
                points: true,
                profileImage: true,
                qrCode: true,
                createdAt: true
            },
        });

        const formattedUsers = users.map(user => ({
            ...user,
            createdAt: DateTime
                .fromJSDate(user.createdAt, { zone: 'utc' })
                .setZone(timezone)
                .toFormat('MMM dd, yyyy, hh:mm a')
        }));

        return {
            totalUsers,
            totalPages,
            currentPage: page,
            users: formattedUsers,
        };
    }

    async deleteUser(currentUserId: number, id: number) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user || user.role !== 'USER') {
            throw new ForbiddenException('Only USER role accounts are allowed here');
        }

        // Delete profile image file if exists
        if (user.profileImage) {
            const profileImgPath = path.join(process.cwd(), 'uploads', path.basename(user.profileImage));
            if (fs.existsSync(profileImgPath)) {
                fs.unlinkSync(profileImgPath);
            }
        }

        // Delete QR code image file if exists
        if (user.qrCode) {
            const qrImgPath = path.join(process.cwd(), 'uploads', 'qrcodes', path.basename(user.qrCode));
            if (fs.existsSync(qrImgPath)) {
                fs.unlinkSync(qrImgPath);
            }
        }

        // Delete related transactions
        await this.prisma.transaction.deleteMany({ where: { userId: id } });

        // Delete related rewards
        await this.prisma.myReward.deleteMany({ where: { userId: id } });

        // Delete related settings
        await this.prisma.settings.deleteMany({ where: { userId: id } });

        // Delete related reset password tokens
        await this.prisma.resetPasswordToken.deleteMany({ where: { userId: id } });

        // Delete the user record from DB
        return this.prisma.user.delete({ where: { id } });
    }

    async updateUser(currentUserId: number, id: number, data: UpdateUserDto) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user || user.role !== 'USER') {
            throw new ForbiddenException('Only USER role accounts can be updated');
        }

        const updateData = { ...data };

        if (data.password) {
            updateData.password = await bcrypt.hash(data.password, 10);
        }

        if (updateData.points) {
            updateData.points = Number(updateData.points);
        }

        if (data.email && data.email !== user.email) {
            if (user.qrCode) {
                const oldQrPath = path.join(process.cwd(), 'uploads', 'qrcodes', path.basename(user.qrCode));
                if (fs.existsSync(oldQrPath)) {
                    fs.unlinkSync(oldQrPath);
                }
            }
            updateData.qrCode = await this.generateUserQrPng(id, data.email);
        }

        return this.prisma.user.update({
            where: { id },
            data: updateData,
            select: {
                id: true,
                enName: true,
                arName: true,
                phone: true,
                email: true,
                role: true,
                points: true,
                profileImage: true,
                qrCode: true,
                createdAt: true
            }
        });
    }

    async addPoints(
        currentUserId: number,
        userId: number,
        price: number,
    ) {

        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user || user.role !== 'USER') {
            throw new ForbiddenException('Only USER role accounts are allowed here');
        }

        const amount = Number(price);
        if (isNaN(amount) || amount <= 0) {
            throw new BadRequestException('Price must be a positive number');
        }

        // Fetch settings to get conversion rates
        const settings = await this.prisma.settings.findUnique({ where: { id: 1 } });;
        if (!settings) {
            throw new NotFoundException('Settings not found. Please configure settings first.');
        }

        // Determine points per currency
        let pointsPerUnit = 0;
        const currency = settings.enCurrency;
        if (currency === 'USD') {
            pointsPerUnit = settings.pointsPerDollar;
        } else if (currency === 'IQD') {
            pointsPerUnit = settings.pointsPerIQD;
        } else {
            throw new BadRequestException('Invalid currency. Use USD or IQD.');
        }

        // Calculate points to add
        const pointsToAdd = amount * pointsPerUnit;

        // Update user points
        const updatedUser = await this.prisma.user.update({
            where: { id: userId },
            data: { points: user.points + pointsToAdd },
            select: {
                id: true,
                enName: true,
                arName: true,
                email: true,
                phone: true,
                role: true,
                points: true,
                profileImage: true,
                qrCode: true,
                createdAt: true
            },
        });

        // Create transaction record
        await this.prisma.transaction.create({
            data: {
                currency: {
                    enCurrency: settings.enCurrency,
                    arCurrency: settings.arCurrency
                },
                type: 'earn',
                points: pointsToAdd,
                userId: userId,
            },
        });

        return {
            message: `Added ${pointsToAdd} points to user successfully`,
            user: updatedUser,
        };
    }
}