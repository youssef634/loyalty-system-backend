import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service/prisma.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';
import { CategoryType } from '@prisma/client';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateCategoryDto) {
    return this.prisma.category.create({
      data: dto,
    });
  }

  async createCafe(dto: Omit<CreateCategoryDto, 'type'>) {
    return this.prisma.category.create({
      data: { ...dto, type: CategoryType.CAFE },
    });
  }

  async createRestaurant(dto: Omit<CreateCategoryDto, 'type'>) {
    return this.prisma.category.create({
      data: { ...dto, type: CategoryType.RESTAURANT },
    });
  }

  async findAll(type?: CategoryType) {
    return this.prisma.category.findMany({
      where: type ? { type } : undefined,
      orderBy: { id: 'asc' },
    });
  }

  async update(id: number, dto: UpdateCategoryDto) {
    const exists = await this.prisma.category.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException('Category not found');

    return this.prisma.category.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    const exists = await this.prisma.category.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException('Category not found');

    return this.prisma.category.delete({ where: { id } });
  }

  async getCafeCategories() {
    return this.prisma.category.findMany({
      where: { type: CategoryType.CAFE },
      orderBy: { id: 'asc' },
    });
  }

  async getRestaurantCategories() {
    return this.prisma.category.findMany({
      where: { type: CategoryType.RESTAURANT },
      orderBy: { id: 'asc' },
    });
  }
}