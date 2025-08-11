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
                points: data.points || 0,
            },
        });

        // Generate and store QR code
        const qrCodeUrl = await this.generateUserQrPng(newUser.id, newUser.email);
        return this.prisma.user.update({
            where: { id: newUser.id },
            data: { qrCode: qrCodeUrl },
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

    async scanQr(
        currentUserId: number,
        qrData: { id: number; email: string }
    ) {
        await this.checkAdmin(currentUserId);

        if (!qrData.id || !qrData.email) {
            throw new BadRequestException('QR code missing required fields');
        }

        return this.getAllUsers(currentUserId, 1, {
            id: qrData.id,
            email: qrData.email
        });
    }


    async getAllUsers(
        currentUserId: number,
        page: number = 1,
        searchFilters?: {
            id?: number;
            enName?: string;
            arName?: string;
            email?: string;
            phone?: string;
        },
    ) {
        await this.checkAdmin(currentUserId);

        const limit = Number(process.env.TAKE);
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

        // If email changes → regenerate QR code
        if (data.email && data.email !== user.email) {
            // Delete old QR code
            if (user.qrCode) {
                const oldQrPath = path.join(process.cwd(), 'uploads', 'qrcodes', path.basename(user.qrCode));
                if (fs.existsSync(oldQrPath)) {
                    fs.unlinkSync(oldQrPath);
                }
            }

            // Generate new QR code
            const uploadDir = path.join(process.cwd(), 'uploads', 'qrcodes');
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            const fileName = `${data.email}.png`; // Name based on email
            const filePath = path.join(uploadDir, fileName);

            const qrPayload = JSON.stringify({ id: id, email: data.email });
            await QRCode.toFile(filePath, qrPayload);

            updateData.qrCode = `http://localhost:3000/uploads/qrcodes/${fileName}`;
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
}