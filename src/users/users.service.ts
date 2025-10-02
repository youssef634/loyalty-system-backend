import { BadRequestException, ForbiddenException, Injectable, NotFoundException, Logger } from '@nestjs/common';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../connection/connection.service';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
import * as bcrypt from 'bcrypt';
import * as QRCode from 'qrcode';
import * as fs from 'fs';
import * as path from 'path';
import { DateTime } from 'luxon';

@Injectable()
export class UsersService {
    private readonly logger = new Logger(UsersService.name);

    constructor(
        private cloudPrisma: CloudPrismaService,
        private localPrisma: LocalPrismaService,
        private connectionService: ConnectionService,
    ) { }

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

    async addUser(currentUserId: number, currentUserName: string, data: CreateUserDto) {
        const isOnline = this.connectionService.getConnectionStatus();

        if (!isOnline) {
            throw new ForbiddenException('User creation requires internet connection');
        }

        const existingUser = await this.cloudPrisma.user.findFirst({
            where: { OR: [{ email: data.email }, { phone: data.phone }] },
        });
        if (existingUser) throw new BadRequestException('User with this email or phone already exists');

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const newUser = await this.cloudPrisma.user.create({
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

        // Generate and store QR code
        const qrCode = await this.generateUserQrPng(newUser.id, newUser.email);
        const updatedUser = await this.cloudPrisma.user.update({
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

        // ✅ Create log
        try {
            await this.cloudPrisma.createLog.create({
                data: {
                    userId: currentUserId,
                    userName: currentUserName,
                    screen: 'users',
                    message: `${currentUserName} created user ${updatedUser.enName} with phone (${updatedUser.phone})`
                }
            });
        } catch (err) {
            this.logger.warn(`⚠️ Failed to create log: ${err}`);
        }

        // Sync to local
        try {
            await this.localPrisma.user.create({
                data: {
                    id: updatedUser.id,
                    enName: updatedUser.enName,
                    arName: updatedUser.arName,
                    phone: updatedUser.phone,
                    email: updatedUser.email,
                    password: hashedPassword,
                    role: 'USER',
                    points: updatedUser.points,
                    profileImage: updatedUser.profileImage,
                    qrCode: updatedUser.qrCode,
                    createdAt: updatedUser.createdAt,
                },
            });
            this.logger.log(`User ${updatedUser.id} synced to local database`);
        } catch (error) {
            this.logger.warn(`Failed to sync user to local DB: ${error}`);
        }

        return updatedUser;
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
            sortBy?: string;
            sortOrder?: 'asc' | 'desc';
        },
    ) {
        const isOnline = this.connectionService.getConnectionStatus();
        const prisma: any = isOnline ? this.cloudPrisma : this.localPrisma;

        // Get timezone from settings
        let settings = await prisma.settings.findUnique({ where: { userId: currentUserId } });
        if (!settings) {
            settings = await prisma.settings.findUnique({ where: { id: 1 } });
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

        // Sorting logic
        let orderBy: any = { id: 'asc' };
        if (searchFilters?.sortBy) {
            orderBy = {};
            orderBy[searchFilters.sortBy] = searchFilters.sortOrder === 'asc' ? 'asc' : 'desc';
        }

        const totalUsers = await prisma.user.count({ where: filters });
        const totalPages = Math.ceil(totalUsers / limit);
        if (page > totalPages && totalUsers > 0) throw new NotFoundException('Page not found');

        const skip = (page - 1) * limit;
        const users = await prisma.user.findMany({
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
            orderBy,
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

    async deleteUser(currentUserId: number, currentUserName: string, id: number) {
        const isOnline = this.connectionService.getConnectionStatus();

        if (!isOnline) {
            throw new ForbiddenException('User deletion requires internet connection');
        }

        const user = await this.cloudPrisma.user.findUnique({ where: { id } });
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
        await this.cloudPrisma.transaction.deleteMany({ where: { userId: id } });

        // Delete related rewards
        await this.cloudPrisma.myReward.deleteMany({ where: { userId: id } });

        // Delete related settings
        await this.cloudPrisma.settings.deleteMany({ where: { userId: id } });

        // Delete related reset password tokens
        await this.cloudPrisma.resetPasswordToken.deleteMany({ where: { userId: id } });

        // Delete the user record from cloud DB
        const deleted = await this.cloudPrisma.user.delete({ where: { id } });

        // ✅ Delete log
        try {
            await this.cloudPrisma.deleteLog.create({
                data: {
                    userId: currentUserId,
                    userName: currentUserName,
                    screen: 'users',
                    message: `${currentUserName} deleted user ${deleted.enName}`
                }
            });
        } catch (err) {
            this.logger.warn(`⚠️ Failed to create delete log: ${err}`);
        }


        // Sync deletion to local
        try {
            await this.localPrisma.transaction.deleteMany({ where: { userId: id } });
            await this.localPrisma.myReward.deleteMany({ where: { userId: id } });
            await this.localPrisma.settings.deleteMany({ where: { userId: id } });
            await this.localPrisma.resetPasswordToken.deleteMany({ where: { userId: id } });
            await this.localPrisma.user.delete({ where: { id } });
            this.logger.log(`User ${id} deletion synced to local database`);
        } catch (error) {
            this.logger.warn(`Failed to sync user deletion to local DB: ${error}`);
        }

        return deleted;
    }

    async updateUser(currentUserId: number, currentUserName: string, id: number, data: UpdateUserDto) {
        const isOnline = this.connectionService.getConnectionStatus();

        if (!isOnline) {
            throw new ForbiddenException('User updates require internet connection');
        }

        const user = await this.cloudPrisma.user.findUnique({ where: { id } });
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

        const updated = await this.cloudPrisma.user.update({
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

        // ✅ Update log
        try {
            await this.cloudPrisma.updateLog.create({
                data: {
                    userId: currentUserId,
                    userName: currentUserName,
                    screen: 'users',
                    message: `${currentUserName} updated user ${updated.enName}`
                }
            });
        } catch (err) {
            this.logger.warn(`⚠️ Failed to create update log: ${err}`);
        }

        // Sync to local
        try {
            const localUpdateData: any = {};
            if (data.enName) localUpdateData.enName = data.enName;
            if (data.arName) localUpdateData.arName = data.arName;
            if (data.phone) localUpdateData.phone = data.phone;
            if (data.email) localUpdateData.email = data.email;
            if (data.password) localUpdateData.password = updateData.password;
            if (data.points !== undefined) localUpdateData.points = updateData.points;
            if (updateData.qrCode) localUpdateData.qrCode = updateData.qrCode;

            await this.localPrisma.user.update({
                where: { id },
                data: localUpdateData,
            });
            this.logger.log(`User ${id} update synced to local database`);
        } catch (error) {
            this.logger.warn(`Failed to sync user update to local DB: ${error}`);
        }

        return updated;
    }

    async addPoints(
        currentUserId: number,
        currentUserName: string,
        userId: number,
        points: number,
    ) {
        const isOnline = this.connectionService.getConnectionStatus();

        if (!isOnline) {
            throw new ForbiddenException('Adding points requires internet connection');
        }

        const user = await this.cloudPrisma.user.findUnique({ where: { id: userId } });
        if (!user || user.role !== 'USER') {
            throw new ForbiddenException('Only USER role accounts are allowed here');
        }

        // Fetch settings to get conversion rates
        const settings = await this.cloudPrisma.settings.findUnique({ where: { id: 1 } });
        if (!settings) {
            throw new NotFoundException('Settings not found. Please configure settings first.');
        }

        // Update user points
        const updatedUser = await this.cloudPrisma.user.update({
            where: { id: userId },
            data: { points: user.points + points },
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
        const transaction = await this.cloudPrisma.transaction.create({
            data: {
                currency: {
                    enCurrency: settings.enCurrency,
                    arCurrency: settings.arCurrency
                },
                type: 'earn',
                points: points,
                userId: userId,
            },
        });

        // ✅ Log points addition as "create"
        try {
            await this.cloudPrisma.createLog.create({
                data: {
                    userId: currentUserId,
                    userName: currentUserName,
                    screen: 'users',
                    message: `${currentUserName} added ${points} points to user ${updatedUser.enName}`
                }
            });
        } catch (err) {
            this.logger.warn(`⚠️ Failed to create log: ${err}`);
        }

        // Sync to local
        try {
            await this.localPrisma.user.update({
                where: { id: userId },
                data: { points: updatedUser.points },
            });

            await this.localPrisma.transaction.create({
                data: {
                    id: transaction.id,
                    currency: transaction.currency,
                    type: transaction.type,
                    points: transaction.points,
                    userId: transaction.userId,
                    cafeProductId: transaction.cafeProductId,
                    restaurantProductId: transaction.restaurantProductId,
                    date: transaction.date,
                },
            });
            this.logger.log(`User ${userId} points addition synced to local database`);
        } catch (error) {
            this.logger.warn(`Failed to sync points addition to local DB: ${error}`);
        }

        return {
            message: `Added ${points} points to user successfully`,
            user: updatedUser,
        };
    }

    async deleteUsers(currentUserId: number, currentUserName: string ,ids: number[]) {
        const results = [];
        for (const id of ids) {
            try {
                await this.deleteUser(currentUserId, currentUserName, id);
                results.push({ id, status: 'deleted' });
            } catch (error) {
                results.push({ id, status: 'error', message: error });
            }
        }
        return { message: 'Users deleted', results };
    }
}