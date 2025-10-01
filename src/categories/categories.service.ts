import { Injectable, NotFoundException, ForbiddenException, Logger } from '@nestjs/common';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../connection/connection.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';
import { CategoryType } from '@prisma/client';

@Injectable()
export class CategoriesService {
  private readonly logger = new Logger(CategoriesService.name);

  constructor(
    private cloudPrisma: CloudPrismaService,
    private localPrisma: LocalPrismaService,
    private connectionService: ConnectionService,
  ) {}

  async create(dto: CreateCategoryDto) {
    const isOnline = this.connectionService.getConnectionStatus();
    
    if (!isOnline) {
      throw new ForbiddenException('Category creation requires internet connection');
    }

    const category = await this.cloudPrisma.category.create({
      data: dto,
    });

    // Sync to local
    try {
      await this.localPrisma.category.create({
        data: {
          id: category.id,
          enName: category.enName,
          arName: category.arName,
          type: category.type,
          createdAt: category.createdAt,
        },
      });
      this.logger.log(`Category ${category.id} synced to local database`);
    } catch (error) {
      this.logger.warn(`Failed to sync category to local DB: ${error}`);
    }

    return category;
  }

  async createCafe(dto: Omit<CreateCategoryDto, 'type'>) {
    return this.create({ ...dto, type: CategoryType.CAFE });
  }

  async createRestaurant(dto: Omit<CreateCategoryDto, 'type'>) {
    return this.create({ ...dto, type: CategoryType.RESTAURANT });
  }

  async findAll(type?: CategoryType) {
    const isOnline = this.connectionService.getConnectionStatus();

    if (isOnline) {
      return this.cloudPrisma.category.findMany({
        where: type ? { type } : undefined,
        orderBy: { id: 'asc' },
      });
    } else {
      return this.localPrisma.category.findMany({
        where: type ? { type } : undefined,
        orderBy: { id: 'asc' },
      });
    }
  }

  async update(id: number, dto: UpdateCategoryDto) {
    const isOnline = this.connectionService.getConnectionStatus();
    
    if (!isOnline) {
      throw new ForbiddenException('Category updates require internet connection');
    }

    const exists = await this.cloudPrisma.category.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException('Category not found');

    const updated = await this.cloudPrisma.category.update({
      where: { id },
      data: dto,
    });

    // Sync to local
    try {
      await this.localPrisma.category.update({
        where: { id },
        data: {
          enName: updated.enName,
          arName: updated.arName,
          type: updated.type,
        },
      });
      this.logger.log(`Category ${id} update synced to local database`);
    } catch (error) {
      this.logger.warn(`Failed to sync category update to local DB: ${error}`);
    }

    return updated;
  }

  async remove(id: number) {
    const isOnline = this.connectionService.getConnectionStatus();
    
    if (!isOnline) {
      throw new ForbiddenException('Category deletion requires internet connection');
    }

    const exists = await this.cloudPrisma.category.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException('Category not found');

    await this.cloudPrisma.category.delete({ where: { id } });

    // Sync deletion to local
    try {
      await this.localPrisma.category.delete({ where: { id } });
      this.logger.log(`Category ${id} deletion synced to local database`);
    } catch (error) {
      this.logger.warn(`Failed to sync category deletion to local DB: ${error}`);
    }

    return exists;
  }

  async getCafeCategories() {
    return this.findAll(CategoryType.CAFE);
  }

  async getRestaurantCategories() {
    return this.findAll(CategoryType.RESTAURANT);
  }
}