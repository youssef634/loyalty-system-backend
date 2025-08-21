import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
import * as bcrypt from 'bcrypt';
import * as QRCode from 'qrcode';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    private async checkAdmin(userId: number) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { role: true }
        });
        if (!user) throw new NotFoundException('Current user not found');
        if (user.role !== 'ADMIN') throw new ForbiddenException('Admins only');
    }

    private async generateUserQrBase64(userId: number, email: string): Promise<string> {
        const qrPayload = JSON.stringify({ id: userId, email });
        const qrBuffer = await QRCode.toBuffer(qrPayload);
        return `data:image/png;base64,${qrBuffer.toString('base64')}`;
    }

    async addUser(currentUserId: number, data: CreateUserDto) {
        await this.checkAdmin(currentUserId);

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
                role: data.role || 'USER',
                points: Number(data.points) || 0,
            },
        });

        // Generate and store QR code as base64
        const qrCodeBase64 = await this.generateUserQrBase64(newUser.id, newUser.email);
        return this.prisma.user.update({
            where: { id: newUser.id },
            data: { qrCode: qrCodeBase64 },
            select: {
                id: true,
                enName: true,
                arName: true,
                phone: true,
                email: true,
                role: true,
                points: true,
                profileImage: true,
                qrCode: true
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
        await this.checkAdmin(currentUserId);

        const limit = searchFilters?.limit && searchFilters.limit > 0 ? searchFilters.limit : 10;
        const filters: any = {};

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
                qrCode: true
            },
        });

        return {
            totalUsers,
            totalPages,
            currentPage: page,
            users,
        };
    }

    async deleteUser(currentUserId: number, id: number) {
        await this.checkAdmin(currentUserId);
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user) throw new NotFoundException('User not found');

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
        await this.checkAdmin(currentUserId);

        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user) throw new NotFoundException('User not found');

        const updateData = { ...data };

        if (data.password) {
            updateData.password = await bcrypt.hash(data.password, 10);
        }

        // Convert points to number if provided
        if (updateData.points) {
            updateData.points = Number(updateData.points);
        }

        // If email changes → regenerate QR code
        if (data.email && data.email !== user.email) {
            // Generate new QR code as base64
            updateData.qrCode = await this.generateUserQrBase64(id, data.email);
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
                qrCode: true
            }
        });
    }

    async addPoints(
        currentUserId: number,
        userId: number,
        price: number,
    ) {
        await this.checkAdmin(currentUserId);

        const amount = Number(price);
        if (isNaN(amount) || amount <= 0) {
            throw new BadRequestException('Price must be a positive number');
        }

        // Fetch settings to get conversion rates
        const settings = await this.prisma.settings.findFirst();
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

        // Find user
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user) throw new NotFoundException('User not found');

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