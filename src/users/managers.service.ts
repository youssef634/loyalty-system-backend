import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service/prisma.service';
import { CreateUserDto, UpdateUserDto } from '../users/dto/users.dto';
import * as bcrypt from 'bcrypt';
import { Role } from '@prisma/client';

@Injectable()
export class ManagersService {
  constructor(private prisma: PrismaService) {}

  async createManager(data: CreateUserDto) {
    if (!data.role || data.role === Role.USER) {
      throw new BadRequestException('Managers must have role ADMIN, ACCOUNTANT, or CASHIER');
    }

    const existing = await this.prisma.user.findFirst({
      where: { OR: [{ email: data.email }, { phone: data.phone }] },
    });
    if (existing) throw new BadRequestException('User with this email or phone already exists');

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return this.prisma.user.create({
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
  }

  async findAllManagers() {
    return this.prisma.user.findMany({
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

  async updateManager(id: number, data: UpdateUserDto) {
    const manager = await this.prisma.user.findUnique({ where: { id } });
    if (!manager) throw new NotFoundException('Manager not found');

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    if (data.role === Role.USER) {
      throw new BadRequestException('Cannot downgrade manager to USER here');
    }

    return this.prisma.user.update({
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
  }

  async removeManager(id: number) {
    const manager = await this.prisma.user.findUnique({ where: { id } });
    if (!manager) throw new NotFoundException('Manager not found');

    return this.prisma.user.delete({
      where: { id },
      select: { id: true, email: true, role: true },
    });
  }
}