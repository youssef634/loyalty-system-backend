import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service/prisma.service';
import { CreateCafeProductDto, UpdateCafeProductDto } from './dto/cafe.dto';
import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';

@Injectable()
export class CafeProductsService {
  constructor(private prisma: PrismaService) {}

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

    const total = await this.prisma.cafeProduct.count({ where });
    const totalPages = Math.ceil(total / limit);
    if (page > totalPages && total > 0) {
      throw new NotFoundException('Page not found');
    }

    const skip = (page - 1) * limit;

    const products = await this.prisma.cafeProduct.findMany({
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
    data: CreateCafeProductDto,
    file?: Express.Multer.File,
  ) {
    await this.checkAdmin(currentUserId);

    let imageUrl: string | null = null;
    const uploadDir = path.join(process.cwd(), 'uploads', 'cafe-products');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    if (file) {
      // Save uploaded file
      const fileName = `${Date.now()}_${file.originalname}`;
      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, file.buffer);
      imageUrl = `http://loyalty-system-backend-production.up.railway.app/uploads/cafe-products/${fileName}`;
    } else if (data.image && /^https?:\/\//i.test(data.image)) {
      // Fetch image from URL and save
      const response = await axios.get(data.image, { responseType: 'arraybuffer' });
      const ext = response.headers['content-type']?.split('/')[1] || 'jpg';
      const fileName = `${Date.now()}_url.${ext}`;
      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, response.data);
      imageUrl = `http://loyalty-system-backend-production.up.railway.app/uploads/cafe-products/${fileName}`;
    }

    return this.prisma.cafeProduct.create({
      data: {
        ...data,
        image: imageUrl,
      },
    });
  }

  async updateProduct(
    currentUserId: number,
    id: number,
    data: UpdateCafeProductDto,
    file?: Express.Multer.File,
  ) {
    await this.checkAdmin(currentUserId);

    const product = await this.prisma.cafeProduct.findUnique({ where: { id } });
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

    return this.prisma.cafeProduct.update({
      where: { id },
      data: {
        ...data,
        image: imageUrl,
      },
    });
  }

  async deleteProduct(currentUserId: number, id: number) {
    await this.checkAdmin(currentUserId);

    const product = await this.prisma.cafeProduct.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');

    // Delete image file if exists and is a local file
    if (product.image && product.image.startsWith('http://loyalty-system-backend-production.up.railway.app/uploads/cafe-products/')) {
      const fileName = path.basename(product.image);
      const filePath = path.join(process.cwd(), 'uploads', 'cafe-products', fileName);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
    return this.prisma.cafeProduct.delete({ where: { id } });
  }
}