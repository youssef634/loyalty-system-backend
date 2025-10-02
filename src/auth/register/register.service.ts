import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CloudPrismaService } from '../../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../../connection/connection.service';
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
import axios from 'axios';
import { Logger } from '@nestjs/common';

dotenv.config();

@Injectable()
export class RegisterService {
  private readonly logger = new Logger(RegisterService.name);

  constructor(
    private cloudPrisma: CloudPrismaService,
    private localPrisma: LocalPrismaService,
    private connectionService: ConnectionService,
    private readonly jwt: JwtService,
  ) { }

  private getQrUploadPath() {
    const uploadDir = path.join(process.cwd(), 'uploads', 'qrcodes');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    return uploadDir;
  }

  private async generateUserQrPng(userId: number, email: string, phone: string): Promise<string> {
    const uploadDir = this.getQrUploadPath();
    const fileName = `${email}.png`;
    const filePath = path.join(uploadDir, fileName);

    const qrPayload = JSON.stringify({ id: userId, email, phone });
    await QRCode.toFile(filePath, qrPayload);

    return `http://localhost:3000/uploads/qrcodes/${fileName}`;
  }

  // Register New User
  async signUp(data: RegisterDto) {
    const isOnline = await this.connectionService.checkConnection();

    if (!isOnline) {
      throw new BadRequestException('Registration requires internet connection');
    }

    const existingUser = await this.cloudPrisma.user.findFirst({
      where: { OR: [{ email: data.email }, { phone: data.phone }] },
    });

    if (existingUser) throw new BadRequestException('User with this email or phone already exists');
    if (data.password !== data.confirmPassword) throw new BadRequestException('Passwords do not match');

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await this.cloudPrisma.user.create({
      data: {
        enName: data.enName,
        arName: data.arName,
        phone: data.phone,
        email: data.email,
        password: hashedPassword,
      },
    });

    // Generate QR code and update the user
    const qrCode = await this.generateUserQrPng(newUser.id, newUser.email, newUser.phone);
    const updatedUser = await this.cloudPrisma.user.update({
      where: { id: newUser.id },
      data: { qrCode: qrCode }
    });

    // Also create in local database for offline access
    try {
      await this.localPrisma.user.create({
        data: {
          id: updatedUser.id,
          enName: updatedUser.enName,
          arName: updatedUser.arName,
          phone: updatedUser.phone,
          email: updatedUser.email,
          password: updatedUser.password,
          qrCode: updatedUser.qrCode,
          role: updatedUser.role,
          points: updatedUser.points,
          createdAt: updatedUser.createdAt,
        },
      });
      this.logger.log(`User ${updatedUser.id} synced to local database`);
    } catch (error) {
      this.logger.warn(`Failed to sync new user to local DB: ${error}`);
    }

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

  // Login - Works offline
  async login(data: LoginDto) {
    const isOnline = await this.connectionService.checkConnection();

    if (isOnline) {
      this.logger.log('🌐 Login via CLOUD database');
      return await this.loginCloud(data);
    } else {
      this.logger.warn('📴 Login via LOCAL database (offline mode)');
      return await this.loginLocal(data);
    }
  }

  // Cloud login
  private async loginCloud(data: LoginDto) {
    const user = await this.cloudPrisma.user.findFirst({
      where: {
        OR: [
          { email: data.emailOrPhone },
          { phone: data.emailOrPhone }
        ]
      },
    });
    if (!user) throw new UnauthorizedException('Invalid email/phone or password');

    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Invalid email/phone or password');

    const token = await this.jwt.signAsync({ id: user.id });

    let permissions: string[] = [];

    if (user.role === 'USER') {
      permissions = ['dashboard', 'transactions', 'products', 'rewards'];
    } else if (user.role !== 'ADMIN') {
      const rolePermissions = await this.cloudPrisma.rolePermission.findMany({
        where: { role: user.role },
        select: { page: true },
      });
      permissions = rolePermissions.map(p => p.page);
    }

    try {
      await this.cloudPrisma.loginLog.create({
        data: {
          userId: user.id,
          userName: user.enName,
          screen: 'Login',
          message: `${user.enName} logged in successfully`,
        },
      });
    } catch (error) {
      this.logger.warn(`⚠️ Failed to create login log: ${error}`);
    }

    // Sync user to local database for future offline access
    try {
      await this.localPrisma.user.upsert({
        where: { id: user.id },
        update: {
          enName: user.enName,
          arName: user.arName,
          phone: user.phone,
          email: user.email,
          password: user.password,
          profileImage: user.profileImage,
          role: user.role,
          points: user.points,
          qrCode: user.qrCode,
        },
        create: {
          id: user.id,
          enName: user.enName,
          arName: user.arName,
          phone: user.phone,
          email: user.email,
          password: user.password,
          profileImage: user.profileImage,
          role: user.role,
          points: user.points,
          qrCode: user.qrCode,
          createdAt: user.createdAt,
        },
      });
      this.logger.log(`User ${user.id} synced to local database`);
    } catch (error) {
      this.logger.warn(`Failed to sync user to local DB: ${error}`);
    }

    return {
      message: 'Login successful',
      token,
      source: 'cloud',
      user: {
        id: user.id,
        enName: user.enName,
        arName: user.arName,
        email: user.email,
        phone: user.phone,
        profileImage: user.profileImage,
        qrCode: user.qrCode,
        role: user.role,
        ...(permissions.length > 0 && { permissions }),
      },
    };
  }

  // Local login (offline)
  private async loginLocal(data: LoginDto) {
    const user = await this.localPrisma.user.findFirst({
      where: {
        OR: [
          { email: data.emailOrPhone },
          { phone: data.emailOrPhone }
        ]
      },
    });
    if (!user) throw new UnauthorizedException('Invalid email/phone or password. Note: You must login online at least once before using offline mode.');

    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Invalid email/phone or password');

    const token = await this.jwt.signAsync({ id: user.id });

    let permissions: string[] = [];

    if (user.role === 'USER') {
      permissions = ['dashboard', 'transactions', 'products', 'rewards'];
    } else if (user.role !== 'ADMIN') {
      const rolePermissions = await this.localPrisma.rolePermission.findMany({
        where: { role: user.role },
        select: { page: true },
      });
      permissions = rolePermissions.map(p => p.page);
    }

    return {
      message: 'Login successful (offline mode)',
      token,
      source: 'local',
      offlineMode: true,
      user: {
        id: user.id,
        enName: user.enName,
        arName: user.arName,
        email: user.email,
        phone: user.phone,
        profileImage: user.profileImage,
        qrCode: user.qrCode,
        role: user.role,
        ...(permissions.length > 0 && { permissions }),
      },
    };
  }

  // Get Profile - Works offline
  async getProfile(userId: number) {
    const isOnline = await this.connectionService.checkConnection();

    if (isOnline) {
      return await this.getProfileCloud(userId);
    } else {
      return await this.getProfileLocal(userId);
    }
  }

  private async getProfileCloud(userId: number) {
    const user = await this.cloudPrisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new BadRequestException('User not found');

    let permissions: string[] = [];

    if (user.role === 'USER') {
      permissions = ['dashboard', 'transactions', 'products', 'rewards'];
    } else if (user.role !== 'ADMIN') {
      const rolePermissions = await this.cloudPrisma.rolePermission.findMany({
        where: { role: user.role },
        select: { page: true },
      });
      permissions = rolePermissions.map(p => p.page);
    }

    const { password, ...userData } = user;
    return {
      ...userData,
      ...(permissions.length > 0 && { permissions }),
      source: 'cloud',
    };
  }

  private async getProfileLocal(userId: number) {
    const user = await this.localPrisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new BadRequestException('User not found');

    let permissions: string[] = [];

    if (user.role === 'USER') {
      permissions = ['dashboard', 'transactions', 'products', 'rewards'];
    } else if (user.role !== 'ADMIN') {
      const rolePermissions = await this.localPrisma.rolePermission.findMany({
        where: { role: user.role },
        select: { page: true },
      });
      permissions = rolePermissions.map(p => p.page);
    }

    const { password, ...userData } = user;
    return {
      ...userData,
      ...(permissions.length > 0 && { permissions }),
      source: 'local',
    };
  }

  // Update Name - Requires online
  async updateName(userId: number, dto: UpdateNameDto = {}) {
    const isOnline = await this.connectionService.checkConnection();
    if (!isOnline) {
      throw new BadRequestException('Profile updates require internet connection');
    }

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

    const updatedUser = await this.cloudPrisma.user.update({
      where: { id: userId },
      data: updateData,
    });

    // Sync to local
    try {
      await this.localPrisma.user.update({
        where: { id: userId },
        data: updateData,
      });
    } catch (error) {
      this.logger.warn(`Failed to sync name update to local DB: ${error}`);
    }

    const { password, ...userWithoutPassword } = updatedUser;

    return {
      message: 'Name updated successfully',
      user: userWithoutPassword,
    };
  }

  // Upload Profile Image - Requires online
  async uploadProfileImage(userId: number, file?: Express.Multer.File, image?: string) {
    const isOnline = await this.connectionService.checkConnection();
    if (!isOnline) {
      throw new BadRequestException('Profile image upload requires internet connection');
    }

    const user = await this.cloudPrisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new BadRequestException('User not found');

    const uploadDir = path.join(process.cwd(), 'uploads', 'profiles');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    let imageUrl = user.profileImage;

    // Handle file upload
    if (file) {
      if (imageUrl && imageUrl.startsWith('http://localhost:3000/uploads/profiles/')) {
        const oldPath = path.join(uploadDir, path.basename(imageUrl));
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }
      const fileName = `${userId}_${Date.now()}${path.extname(file.originalname)}`;
      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, file.buffer);
      imageUrl = `http://localhost:3000/uploads/profiles/${fileName}`;
    }
    // Handle base64 image string
    else if (image && /^data:image\/[a-z]+;base64,/.test(image)) {
      if (imageUrl && imageUrl.startsWith('http://localhost:3000/uploads/profiles/')) {
        const oldPath = path.join(uploadDir, path.basename(imageUrl));
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }
      const matches = image.match(/^data:image\/([a-z]+);base64,(.+)$/);
      const ext = matches ? matches[1] : 'jpg';
      const base64Data = matches ? matches[2] : '';
      const fileName = `${userId}_${Date.now()}_base64.${ext}`;
      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
      imageUrl = `http://localhost:3000/uploads/profiles/${fileName}`;
    }
    // Handle external image URL
    else if (
      image &&
      /^https?:\/\//i.test(image) &&
      !image.startsWith('http://localhost:3000/uploads/profiles/')
    ) {
      if (imageUrl && imageUrl.startsWith('http://localhost:3000/uploads/profiles/')) {
        const oldPath = path.join(uploadDir, path.basename(imageUrl));
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }
      const response = await axios.get(image, { responseType: 'arraybuffer' });
      const ext = response.headers['content-type']?.split('/')[1] || 'jpg';
      const fileName = `${userId}_${Date.now()}_url.${ext}`;
      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, response.data);
      imageUrl = `http://localhost:3000/uploads/profiles/${fileName}`;
    }
    // Handle local image URL
    else if (
      image &&
      image.startsWith('http://localhost:3000/uploads/profiles/')
    ) {
      imageUrl = image;
    }

    const updatedUser = await this.cloudPrisma.user.update({
      where: { id: userId },
      data: { profileImage: imageUrl },
    });

    // Sync to local
    try {
      await this.localPrisma.user.update({
        where: { id: userId },
        data: { profileImage: imageUrl },
      });
    } catch (error) {
      this.logger.warn(`Failed to sync profile image to local DB: ${error}`);
    }

    const { password, ...userWithoutPassword } = updatedUser;
    return {
      message: 'Profile image updated successfully',
      user: userWithoutPassword,
    };
  }

  // Remove Profile Image - Requires online
  async removeProfileImage(userId: number) {
    const isOnline = await this.connectionService.checkConnection();
    if (!isOnline) {
      throw new BadRequestException('Profile updates require internet connection');
    }

    const user = await this.cloudPrisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new BadRequestException('User not found');

    const updatedUser = await this.cloudPrisma.user.update({
      where: { id: userId },
      data: { profileImage: null },
    });

    // Sync to local
    try {
      await this.localPrisma.user.update({
        where: { id: userId },
        data: { profileImage: null },
      });
    } catch (error) {
      this.logger.warn(`Failed to sync profile image removal to local DB: ${error}`);
    }

    const { password, ...userWithoutPassword } = updatedUser;
    return {
      message: 'Profile image removed successfully',
      user: userWithoutPassword,
    };
  }

  // Update Password - Requires online
  async updatePassword(userId: number, dto: UpdatePasswordDto) {
    const isOnline = await this.connectionService.checkConnection();
    if (!isOnline) {
      throw new BadRequestException('Password updates require internet connection');
    }

    const { oldPassword, newPassword, confirmPassword } = dto;

    const user = await this.cloudPrisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new BadRequestException('User not found');

    const isOldPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
    if (!isOldPasswordCorrect) {
      return { message: 'Old password is incorrect' };
    }

    if (newPassword !== confirmPassword) {
      return { message: 'New password and confirmation do not match' };
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const updatedUser = await this.cloudPrisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    // Sync to local
    try {
      await this.localPrisma.user.update({
        where: { id: userId },
        data: { password: hashedPassword },
      });
    } catch (error) {
      this.logger.warn(`Failed to sync password to local DB: ${error}`);
    }

    const { password, ...userWithoutPassword } = updatedUser;

    return {
      message: 'Password updated successfully',
      user: userWithoutPassword,
    };
  }

  // Request reset password - Requires online
  async requestResetPassword({ email }: ResetPasswordRequestDto) {
    const isOnline = await this.connectionService.checkConnection();
    if (!isOnline) {
      throw new BadRequestException('Password reset requires internet connection');
    }

    const user = await this.cloudPrisma.user.findUnique({ where: { email } });
    if (!user) throw new BadRequestException('User not found');

    const randomCode = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(randomCode).digest('hex');
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    await this.cloudPrisma.resetPasswordToken.create({
      data: {
        userId: user.id,
        randomCode: 0,
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

  // Reset password - Requires online
  async resetPassword({ token, newPassword }: ResetPasswordDto) {
    const isOnline = await this.connectionService.checkConnection();
    if (!isOnline) {
      throw new BadRequestException('Password reset requires internet connection');
    }

    const resetToken = await this.cloudPrisma.resetPasswordToken.findFirst({
      where: { token },
    });

    if (!resetToken) throw new BadRequestException('Invalid or expired token');

    if (resetToken.expiresAt && resetToken.expiresAt < new Date()) {
      await this.cloudPrisma.resetPasswordToken.delete({ where: { id: resetToken.id } });
      throw new BadRequestException('Token has expired');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await this.cloudPrisma.user.update({
      where: { id: resetToken.userId },
      data: { password: hashedPassword },
    });

    // Sync to local
    try {
      await this.localPrisma.user.update({
        where: { id: resetToken.userId },
        data: { password: hashedPassword },
      });
    } catch (error) {
      this.logger.warn(`Failed to sync password reset to local DB: ${error}`);
    }

    await this.cloudPrisma.resetPasswordToken.deleteMany({ where: { id: resetToken.id } });

    return { message: 'Password reset successfully.' };
  }
}