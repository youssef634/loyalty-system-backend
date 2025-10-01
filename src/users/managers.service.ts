import { Injectable, NotFoundException, BadRequestException, ForbiddenException, Logger } from '@nestjs/common';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../connection/connection.service';
import { CreateUserDto, UpdateUserDto } from '../users/dto/users.dto';
import * as bcrypt from 'bcrypt';
import { Role } from '@prisma/client';

@Injectable()
export class ManagersService {
  private readonly logger = new Logger(ManagersService.name);

  constructor(
    private cloudPrisma: CloudPrismaService,
    private localPrisma: LocalPrismaService,
    private connectionService: ConnectionService,
  ) {}

  async createManager(data: CreateUserDto) {
    const isOnline = this.connectionService.getConnectionStatus();

    if (!isOnline) {
      throw new ForbiddenException('Manager creation requires internet connection');
    }

    if (!data.role || data.role === Role.USER) {
      throw new BadRequestException('Managers must have role ADMIN, ACCOUNTANT, or CASHIER');
    }

    const existing = await this.cloudPrisma.user.findFirst({
      where: { OR: [{ email: data.email }, { phone: data.phone }] },
    });
    if (existing) throw new BadRequestException('User with this email or phone already exists');

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const manager = await this.cloudPrisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
        points: 0,
      },
      select: {
        id: true,
        enName: true,
        arName: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    });

    // Sync to local
    try {
      await this.localPrisma.user.create({
        data: {
          id: manager.id,
          enName: data.enName,
          arName: data.arName,
          email: data.email,
          phone: data.phone,
          password: hashedPassword,
          role: data.role,
          points: 0,
          createdAt: manager.createdAt,
        },
      });
      this.logger.log(`Manager ${manager.id} synced to local database`);
    } catch (error) {
      this.logger.warn(`Failed to sync manager to local DB: ${error}`);
    }

    return manager;
  }

  async findAllManagers() {
    const isOnline = this.connectionService.getConnectionStatus();

    if (isOnline) {
      return this.cloudPrisma.user.findMany({
        where: { role: { in: [Role.ADMIN, Role.ACCOUNTANT, Role.CASHIER] } },
        orderBy: { id: 'asc' },
        select: {
          id: true,
          enName: true,
          arName: true,
          email: true,
          phone: true,
          role: true,
          createdAt: true,
        },
      });
    } else {
      return this.localPrisma.user.findMany({
        where: { role: { in: [Role.ADMIN, Role.ACCOUNTANT, Role.CASHIER] } },
        orderBy: { id: 'asc' },
        select: {
          id: true,
          enName: true,
          arName: true,
          email: true,
          phone: true,
          role: true,
          createdAt: true,
        },
      });
    }
  }

  async updateManager(id: number, data: UpdateUserDto) {
    const isOnline = this.connectionService.getConnectionStatus();

    if (!isOnline) {
      throw new ForbiddenException('Manager updates require internet connection');
    }

    const manager = await this.cloudPrisma.user.findUnique({ where: { id } });
    if (!manager) throw new NotFoundException('Manager not found');

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    if (data.role === Role.USER) {
      throw new BadRequestException('Cannot downgrade manager to USER here');
    }

    const updated = await this.cloudPrisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        enName: true,
        arName: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    });

    // Sync to local
    try {
      const localUpdateData: any = {};
      if (data.enName) localUpdateData.enName = data.enName;
      if (data.arName) localUpdateData.arName = data.arName;
      if (data.email) localUpdateData.email = data.email;
      if (data.phone) localUpdateData.phone = data.phone;
      if (data.password) localUpdateData.password = data.password;
      if (data.role) localUpdateData.role = data.role;

      await this.localPrisma.user.update({
        where: { id },
        data: localUpdateData,
      });
      this.logger.log(`Manager ${id} update synced to local database`);
    } catch (error) {
      this.logger.warn(`Failed to sync manager update to local DB: ${error}`);
    }

    return updated;
  }

  async removeManager(id: number) {
    const isOnline = this.connectionService.getConnectionStatus();

    if (!isOnline) {
      throw new ForbiddenException('Manager deletion requires internet connection');
    }

    const manager = await this.cloudPrisma.user.findUnique({ where: { id } });
    if (!manager) throw new NotFoundException('Manager not found');

    const deleted = await this.cloudPrisma.user.delete({
      where: { id },
      select: { id: true, email: true, role: true },
    });

    // Sync deletion to local
    try {
      await this.localPrisma.user.delete({ where: { id } });
      this.logger.log(`Manager ${id} deletion synced to local database`);
    } catch (error) {
      this.logger.warn(`Failed to sync manager deletion to local DB: ${error}`);
    }

    return deleted;
  }
}