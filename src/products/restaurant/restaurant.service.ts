import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service/prisma.service';
import { CreateRestaurantProductDto, UpdateRestaurantProductDto } from './dto/restaurant.dto';
import * as fs from 'fs';
import * as path from 'path';
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
      category?: string;
    },
  ) {
    const limit = filters?.limit && filters.limit > 0 ? filters.limit : 10;
    const where: any = {};

    if (filters?.id) where.id = filters.id;
    if (filters?.enName)
      where.enName = { contains: filters.enName, mode: 'insensitive' };
    if (filters?.arName)
      where.arName = { contains: filters.arName, mode: 'insensitive' };
    if (filters?.category)
      where.category = { contains: filters.category, mode: 'insensitive' };

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

    const uploadDir = path.join(process.cwd(), 'uploads', 'restaurant-products');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    let imageUrl: string | undefined;

    if (file) {
      const fileName = `${Date.now()}_${file.originalname}`;
      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, file.buffer);
      imageUrl = `http://localhost:3000/uploads/restaurant-products/${fileName}`;
    }
    // Handle base64 image string
    else if (data.image && /^data:image\/[a-z]+;base64,/.test(data.image)) {
      const matches = data.image.match(/^data:image\/([a-z]+);base64,(.+)$/);
      const ext = matches ? matches[1] : 'jpg';
      const base64Data = matches ? matches[2] : '';
      const fileName = `${Date.now()}_base64.${ext}`;
      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
      imageUrl = `http://localhost:3000/uploads/restaurant-products/${fileName}`;
    }
    // Handle external image URL
    else if (
      data.image &&
      /^https?:\/\//i.test(data.image) &&
      !data.image.startsWith('http://localhost:3000/uploads/restaurant-products/')
    ) {
      const response = await axios.get(data.image, { responseType: 'arraybuffer' });
      const ext = response.headers['content-type']?.split('/')[1] || 'jpg';
      const fileName = `${Date.now()}_url.${ext}`;
      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, response.data);
      imageUrl = `http://localhost:3000/uploads/restaurant-products/${fileName}`;
    }
    // Handle local image URL
    else if (
      data.image &&
      data.image.startsWith('http://localhost:3000/uploads/restaurant-products/')
    ) {
      imageUrl = data.image;
    }

    return this.prisma.restaurantProduct.create({
      data: {
        ...data,
        image: imageUrl,
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
    const uploadDir = path.join(process.cwd(), 'uploads', 'restaurant-products');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    if (file) {
      // Delete old file if exists
      if (imageUrl && imageUrl.startsWith('http://localhost:3000/uploads/restaurant-products/')) {
        const oldPath = path.join(uploadDir, path.basename(imageUrl));
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }
      const fileName = `${Date.now()}_${file.originalname}`;
      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, file.buffer);
      imageUrl = `http://localhost:3000/uploads/restaurant-products/${fileName}`;
    }
    // Handle base64 image string
    else if (data.image && /^data:image\/[a-z]+;base64,/.test(data.image)) {
      if (imageUrl && imageUrl.startsWith('http://localhost:3000/uploads/restaurant-products/')) {
        const oldPath = path.join(uploadDir, path.basename(imageUrl));
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }
      const matches = data.image.match(/^data:image\/([a-z]+);base64,(.+)$/);
      const ext = matches ? matches[1] : 'jpg';
      const base64Data = matches ? matches[2] : '';
      const fileName = `${Date.now()}_base64.${ext}`;
      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
      imageUrl = `http://localhost:3000/uploads/restaurant-products/${fileName}`;
    }
    // Handle external image URL
    else if (
      data.image &&
      /^https?:\/\//i.test(data.image) &&
      !data.image.startsWith('http://localhost:3000/uploads/restaurant-products/')
    ) {
      if (imageUrl && imageUrl.startsWith('http://localhost:3000/uploads/restaurant-products/')) {
        const oldPath = path.join(uploadDir, path.basename(imageUrl));
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }
      const response = await axios.get(data.image, { responseType: 'arraybuffer' });
      const ext = response.headers['content-type']?.split('/')[1] || 'jpg';
      const fileName = `${Date.now()}_url.${ext}`;
      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, response.data);
      imageUrl = `http://localhost:3000/uploads/restaurant-products/${fileName}`;
    }
    // Handle local image URL
    else if (
      data.image &&
      data.image.startsWith('http://localhost:3000/uploads/restaurant-products/')
    ) {
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

    // Delete image file if exists and is a local file
    if (product.image && product.image.startsWith('http://localhost:3000/uploads/restaurant-products/')) {
      const fileName = path.basename(product.image);
      const filePath = path.join(process.cwd(), 'uploads', 'restaurant-products', fileName);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    return this.prisma.restaurantProduct.delete({ where: { id } });
  }
}