import { BadRequestException, Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    private async checkAdmin(userId: number) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { role: true }
        });

        if (!user) {
            throw new NotFoundException('Current user not found');
        }

        if (user.role !== 'ADMIN') {
            throw new ForbiddenException('Access denied: Admins only');
        }
    }

    async addUser(currentUserId: number, data: CreateUserDto) {
        await this.checkAdmin(currentUserId);

        const existingUser = await this.prisma.user.findFirst({
            where: { OR: [{ email: data.email }, { phone: data.phone }] },
        });
        if (existingUser) throw new BadRequestException('User with this email or phone already exists');

        const hashedPassword = await bcrypt.hash(data.password, 10);

        return this.prisma.user.create({
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
    }

    async deleteUser(currentUserId: number, id: number) {
        await this.checkAdmin(currentUserId);

        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user) throw new NotFoundException('User not found');

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

        return this.prisma.user.update({
            where: { id },
            data: updateData,
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
        // Check if user is admin
        await this.checkAdmin(currentUserId);

        const limit = Number(process.env.TAKE)

        // Build search filter dynamically
        const filters: any = {};

        if (searchFilters?.id) {
            filters.id = searchFilters.id;
        }
        if (searchFilters?.enName) {
            filters.enName = { contains: searchFilters.enName, mode: 'insensitive' };
        }
        if (searchFilters?.arName) {
            filters.arName = { contains: searchFilters.arName, mode: 'insensitive' };
        }
        if (searchFilters?.email) {
            filters.email = { contains: searchFilters.email, mode: 'insensitive' };
        }
        if (searchFilters?.phone) {
            filters.phone = { contains: searchFilters.phone, mode: 'insensitive' };
        }

        // Count total users matching filters
        const totalUsers = await this.prisma.user.count({
            where: filters,
        });

        const totalPages = Math.ceil(totalUsers / limit);
        if (page > totalPages && totalUsers > 0) {
            throw new NotFoundException('Page not found');
        }

        const skip = (page - 1) * limit;

        // Fetch paginated users
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
            },
        });

        return {
            totalUsers,
            totalPages,
            currentPage: page,
            users,
        };
    }
}