import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import * as nodemailer from 'nodemailer';
import * as fs from 'fs';
import * as path from 'path';
import { ResetPasswordDto, ResetPasswordRequestDto } from './dto/reset-password.dto';
import { LoginDto, RegisterDto, UpdateNameDto, UpdatePasswordDto } from './dto/register.dto';
import * as dotenv from 'dotenv';
import * as QRCode from 'qrcode';
import { Buffer } from 'buffer';

dotenv.config();

@Injectable()
export class RegisterService {
  constructor(
    private prisma: PrismaService,
    private readonly jwt: JwtService,
  ) { }

  private async generateUserQrBase64(userId: number, email: string): Promise<string> {
    const qrPayload = JSON.stringify({ id: userId, email });
    const qrBuffer = await QRCode.toBuffer(qrPayload);
    return `data:image/png;base64,${qrBuffer.toString('base64')}`;
  }

  // Register New User
  async signUp(data: RegisterDto) {
    const existingUser = await this.prisma.user.findFirst({
      where: { OR: [{ email: data.email }, { phone: data.phone }] },
    });

    if (existingUser) throw new BadRequestException('User with this email or phone already exists');
    if (data.password !== data.confirmPassword) throw new BadRequestException('Passwords do not match');

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await this.prisma.user.create({
      data: {
        enName: data.enName,
        arName: data.arName,
        phone: data.phone,
        email: data.email,
        password: hashedPassword,
      },
    });

    // Generate QR code and update the user
    const qrCodeBase64 = await this.generateUserQrBase64(newUser.id, newUser.email);
    const updatedUser = await this.prisma.user.update({
      where: { id: newUser.id },
      data: { qrCode: qrCodeBase64 }
    });

    return {
      message: 'User registered successfully',
      user: {
        id: updatedUser.id,
        enName: updatedUser.enName,
        arName: updatedUser.arName,
        email: updatedUser.email,
        phone: updatedUser.phone,
        qrCode: updatedUser.qrCode,
      },
    };
  }

  // Login
  async login(data: LoginDto) {
    const user = await this.prisma.user.findUnique({ where: { email: data.email } });
    if (!user) throw new UnauthorizedException('Invalid email or password');

    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Invalid email or password');

    const token = await this.jwt.signAsync({ id: user.id });

    return {
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        enName: user.enName,
        arName: user.arName,
        email: user.email,
        phone: user.phone,
        profileImage: user.profileImage,
        qrCode: user.qrCode,
      },
    };
  }

  // Get Profile
  async getProfile(userId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new BadRequestException('User not found');

    const { password, ...userData } = user;
    return userData;
  }

  // Update Name
  async updateName(userId: number, dto: UpdateNameDto = {}) {
    const { enName, arName } = dto;

    if (!enName && !arName) {
      throw new BadRequestException('At least one name field must be provided');
    }

    if (enName && !/^[A-Za-z\s]+$/.test(enName)) {
      throw new BadRequestException('English name must contain only English letters');
    }

    if (arName && !/^[\u0600-\u06FF\s]+$/.test(arName)) {
      throw new BadRequestException('Arabic name must contain only Arabic letters');
    }

    const updateData: any = {};
    if (enName) updateData.enName = enName;
    if (arName) updateData.arName = arName;

    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: updateData,
    });

    const { password, ...userWithoutPassword } = updatedUser;

    return {
      message: 'Name updated successfully',
      user: userWithoutPassword,
    };
  }

  // Upload Profile Image
  async uploadProfileImage(userId: number, file: Express.Multer.File) {
    if (!file) throw new BadRequestException('No file uploaded');

    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new BadRequestException('User not found');

    // Convert image buffer to base64 string
    const base64Image = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;

    // Update DB with base64 string
    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: { profileImage: base64Image },
    });

    const { password, ...userWithoutPassword } = updatedUser;
    return {
      message: 'Profile image updated successfully',
      user: userWithoutPassword,
    };
  }

  // Update Password
  async updatePassword(userId: number, dto: UpdatePasswordDto) {
    const { oldPassword, newPassword, confirmPassword } = dto;

    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new BadRequestException('User not found');

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

  // Request reset password (hashed token in URL + expiry)
  async requestResetPassword({ email }: ResetPasswordRequestDto) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new BadRequestException('User not found');

    const randomCode = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(randomCode).digest('hex');
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    await this.prisma.resetPasswordToken.create({
      data: {
        userId: user.id,
        randomCode: 0, // not used anymore
        token: hashedToken,
        expiresAt,
      },
    });

    const resetLink = `http://localhost:3001/reset-password?token=${encodeURIComponent(hashedToken)}`;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Reset Your Password',
      text: `Click the link to reset your password (expires in 10 minutes): ${resetLink}`,
    });

    return { message: 'Password reset link sent to your email.' };
  }

  // Reset password (check hashed token + expiry)
  async resetPassword({ token, newPassword }: ResetPasswordDto) {
    const resetToken = await this.prisma.resetPasswordToken.findFirst({
      where: { token },
    });

    if (!resetToken) throw new BadRequestException('Invalid or expired token');

    if (resetToken.expiresAt && resetToken.expiresAt < new Date()) {
      await this.prisma.resetPasswordToken.delete({ where: { id: resetToken.id } });
      throw new BadRequestException('Token has expired');
    }

    await this.prisma.user.update({
      where: { id: resetToken.userId },
      data: { password: await bcrypt.hash(newPassword, 10) },
    });

    await this.prisma.resetPasswordToken.deleteMany({ where: { id: resetToken.id } });

    return { message: 'Password reset successfully.' };
  }
}