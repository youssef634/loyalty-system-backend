import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {
    LoginDto,
    RegisterDto,
    UpdateNameDto,
    UpdatePasswordDto,
} from './dto/register.dto';
import { Response } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();


@Injectable()
export class RegisterService {
    constructor(
        private prisma: PrismaService,
        private readonly jwt: JwtService,
    ) { }


    // Register New User
    async signUp(data: RegisterDto) {
        const existingUser = await this.prisma.user.findFirst({
            where: {
                OR: [
                    { email: data.email },
                    { phone: data.phone },
                ],
            },
        });

        if (existingUser) {
            throw new BadRequestException('User with this email or phone already exists');
        }

        if (data.password !== data.confirmPassword) {
            throw new BadRequestException('Passwords do not match');
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const newUser = await this.prisma.user.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                phone: data.phone,
                email: data.email,
                password: hashedPassword,
            },
        });

        return {
            message: 'User registered successfully',
            user: {
                id: newUser.id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                phone: newUser.phone,
            },
        };
    }

    // Login User
    async login(data: LoginDto) {
        const user = await this.prisma.user.findUnique({
            where: { email: data.email },
        });

        if (!user) {
            throw new UnauthorizedException('Invalid email or password');
        }

        const isPasswordValid = await bcrypt.compare(data.password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid email or password');
        }

        const token = await this.jwt.signAsync({ id: user.id });

        return {
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
            },
        };

    }

    // Get Profile
    async getProfile(userId: number) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) throw new BadRequestException('User not found');

        const { password, ...userData } = user;
        return userData;
    }

    // Update Name
    async updateName(userId: number, dto: UpdateNameDto) {
        const {firstName , lastName} = dto;
        const updatedUser = await this.prisma.user.update({
            where: { id: userId },
            data: { firstName: firstName , lastName: lastName },
        });

        const { password, ...userWithoutPassword } = updatedUser;

        return {
            message: 'Name updated successfully',
            user: userWithoutPassword,
        };
    }


    // Update Password
    async updatePassword(userId: number, dto: UpdatePasswordDto) {
        const { oldPassword, newPassword, confirmPassword } = dto;

        const user = await this.prisma.user.findUnique({ where: { id: userId } });

        if (!user) {
            throw new Error('User not found');
        }

        const isOldPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
        if (!isOldPasswordCorrect) {
            return { message: 'Old password is incorrect' };
        }

        if (newPassword !== confirmPassword) {
            return { message: 'New password and confirmation do not match' };
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        const updatedUser = await this.prisma.user.update({
            where: { id: userId },
            data: { password: hashedPassword },
        });

        const { password, ...userWithoutPassword } = updatedUser;

        return {
            message: 'Password updated successfully',
            user: userWithoutPassword,
        };
    }

}