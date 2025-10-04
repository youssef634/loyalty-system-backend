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
  ) { }

  async create(currentUserId: number, dto: CreateCategoryDto) {
    const isOnline = this.connectionService.getConnectionStatus();

    if (!isOnline) {
      throw new ForbiddenException('Category creation requires internet connection');
    }

    const currentUser = await this.cloudPrisma.user.findUnique({ where: { id: currentUserId } });
    if (!currentUser) throw new NotFoundException('User not found');

    const category = await this.cloudPrisma.category.create({
      data: dto,
    });

    // ✅ Log the create action
    try {
      await this.cloudPrisma.createLog.create({
        data: {
          userId: currentUserId,
          screen: 'products',
          enMessage: `${currentUser.enName} created category ${category.enName}`,
          arMessage: `${currentUser.arName} أنشأ التصنيف ${category.arName}`,
        },
      });
    } catch (error) {
      this.logger.warn(`⚠️ Failed to create create log: ${error}`);
    }

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

  async createCafe(id: number, dto: Omit<CreateCategoryDto, 'type'>) {
    return this.create(id, { ...dto, type: CategoryType.CAFE });
  }

  async createRestaurant(id: number, dto: Omit<CreateCategoryDto, 'type'>) {
    return this.create(id, { ...dto, type: CategoryType.RESTAURANT });
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

  async update(userId: number, id: number, dto: UpdateCategoryDto) {
    const isOnline = this.connectionService.getConnectionStatus();

    if (!isOnline) {
      throw new ForbiddenException('Category updates require internet connection');
    }

    const currentUser = await this.cloudPrisma.user.findUnique({ where: { id: userId } });
    if (!currentUser) throw new NotFoundException('User not found');

    const exists = await this.cloudPrisma.category.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException('Category not found');

    const updated = await this.cloudPrisma.category.update({
      where: { id },
      data: dto,
    });

    // ✅ Log the update action
    try {
      await this.cloudPrisma.updateLog.create({
        data: {
          userId: userId,
          screen: 'products',
          enMessage: `${currentUser.enName} updated category ${updated.enName}`,
          arMessage: `${currentUser.arName} عدل التصنيف ${updated.arName}`,

        },
      });
    } catch (error) {
      this.logger.warn(`⚠️ Failed to create update log: ${error}`);
    }

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

  async remove(userId, id: number) {
    const isOnline = this.connectionService.getConnectionStatus();

    const currentUser = await this.cloudPrisma.user.findUnique({ where: { id: userId } });
    if (!currentUser) throw new NotFoundException('User not found');

    if (!isOnline) {
      throw new ForbiddenException('Category deletion requires internet connection');
    }

    const exists = await this.cloudPrisma.category.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException('Category not found');

    await this.cloudPrisma.category.delete({ where: { id } });

    // ✅ Log the delete action
    try {
      await this.cloudPrisma.deleteLog.create({
        data: {
          userId: userId,
          screen: 'products',
          enMessage: `${currentUser.enName} deleted category ${exists.enName}`,
          arMessage: `${currentUser.arName} حذف التصنيف ${exists.arName}`,
        },
      });
    } catch (error) {
      this.logger.warn(`⚠️ Failed to create delete log: ${error}`);
    }

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