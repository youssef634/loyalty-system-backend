import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service/prisma.service';
import { CreateRestaurantProductDto, UpdateRestaurantProductDto } from './dto/restaurant.dto';
import axios from 'axios';

@Injectable()
export class RestaurantProductsService {
  constructor(private prisma: PrismaService) { }

  private async checkAdmin(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    if (!user) throw new NotFoundException('Current user not found');
    if (user.role !== 'ADMIN') throw new ForbiddenException('Admins only');
  }

  async getProducts(
    page: number = 1,
    filters?: {
      limit?: number;
      id?: number;
      enName?: string;
      arName?: string;
      minPoints?: number;
      maxPoints?: number;
    },
  ) {
    const limit = filters?.limit && filters.limit > 0 ? filters.limit : 10;
    const where: any = {};

    if (filters?.id) where.id = filters.id;
    if (filters?.enName)
      where.enName = { contains: filters.enName, mode: 'insensitive' };
    if (filters?.arName)
      where.arName = { contains: filters.arName, mode: 'insensitive' };

    if (filters?.minPoints !== undefined || filters?.maxPoints !== undefined) {
      where.points = {};
      if (filters.minPoints !== undefined)
        where.points.gte = Number(filters.minPoints);
      if (filters.maxPoints !== undefined)
        where.points.lte = Number(filters.maxPoints);
    }

    const total = await this.prisma.restaurantProduct.count({ where });
    const totalPages = Math.ceil(total / limit);
    if (page > totalPages && total > 0) {
      throw new NotFoundException('Page not found');
    }

    const skip = (page - 1) * limit;

    const products = await this.prisma.restaurantProduct.findMany({
      where,
      skip,
      take: limit,
    });

    return {
      total,
      totalPages,
      currentPage: page,
      products,
    };
  }

  async addProduct(
    currentUserId: number,
    data: CreateRestaurantProductDto,
    file?: Express.Multer.File,
  ) {
    await this.checkAdmin(currentUserId);

    if (file) {
      data.image = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
    } else if (data.image && /^https?:\/\//i.test(data.image)) {
      // Fetch image from URL and convert to base64
      const response = await axios.get(data.image, { responseType: 'arraybuffer' });
      const mimeType = response.headers['content-type'] || 'image/jpeg';
      const base64 = Buffer.from(response.data).toString('base64');
      data.image = `data:${mimeType};base64,${base64}`;
    } else {
      data.image = null;
    }

    return this.prisma.restaurantProduct.create({
      data: {
        ...data,
      },
    });
  }

  async updateProduct(
    currentUserId: number,
    id: number,
    data: UpdateRestaurantProductDto,
    file?: Express.Multer.File,
  ) {
    await this.checkAdmin(currentUserId);

    const product = await this.prisma.restaurantProduct.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');

    let imageUrl = product.image;

    if (file) {
      imageUrl = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
    } else if (data.image && /^https?:\/\//i.test(data.image)) {
      // Fetch image from URL and convert to base64
      const response = await axios.get(data.image, { responseType: 'arraybuffer' });
      const mimeType = response.headers['content-type'] || 'image/jpeg';
      const base64 = Buffer.from(response.data).toString('base64');
      imageUrl = `data:${mimeType};base64,${base64}`;
    } else if (data.image) {
      imageUrl = data.image;
    }

    return this.prisma.restaurantProduct.update({
      where: { id },
      data: {
        ...data,
        image: imageUrl,
      },
    });
  }

  async deleteProduct(currentUserId: number, id: number) {
    await this.checkAdmin(currentUserId);

    const product = await this.prisma.restaurantProduct.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');

    return this.prisma.restaurantProduct.delete({ where: { id } });
  }
}