import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service/prisma.service';
import { CreateCafeProductDto, UpdateCafeProductDto } from './dto/cafe.dto';
import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';

@Injectable()
export class CafeProductsService {
  constructor(private prisma: PrismaService) { }

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
    if (filters?.category) {
      where.category = {
        OR: [
          { enName: { contains: filters.category, mode: 'insensitive' } },
          { arName: { contains: filters.category, mode: 'insensitive' } },
        ],
      };
    }

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
      include: { category: true }
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
    data: CreateCafeProductDto & { currency?: string },
    file?: Express.Multer.File,
  ) {
    const uploadDir = this.getCafeProductsUploadPath();
    let imageUrl: string | undefined;

    // ✅ Fetch settings for conversion
    const settings = await this.prisma.settings.findUnique({ where: { id: 1 } });
    const usdToIqd = settings?.usdToIqd || 1300;

    // ✅ Currency conversion
    let finalPrice = data.price;
    if (data.currency === 'IQD') {
      finalPrice = data.price / usdToIqd; // Convert IQD → USD
    }

    // Handle file upload, base64, external URL, local URL (same as before)
    if (file) {
      const fileName = `${Date.now()}_${file.originalname}`;
      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, file.buffer);
      imageUrl = `http://localhost:3000/uploads/cafe-products/${fileName}`;
    } else if (data.image && /^data:image\/[a-z]+;base64,/.test(data.image)) {
      const matches = data.image.match(/^data:image\/([a-z]+);base64,(.+)$/);
      const ext = matches ? matches[1] : 'jpg';
      const base64Data = matches ? matches[2] : '';
      const fileName = `${Date.now()}_base64.${ext}`;
      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
      imageUrl = `http://localhost:3000/uploads/cafe-products/${fileName}`;
    } else if (
      data.image &&
      /^https?:\/\//i.test(data.image) &&
      !data.image.startsWith('http://localhost:3000/uploads/cafe-products/')
    ) {
      const response = await axios.get(data.image, { responseType: 'arraybuffer' });
      const ext = response.headers['content-type']?.split('/')[1] || 'jpg';
      const fileName = `${Date.now()}_url.${ext}`;
      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, response.data);
      imageUrl = `http://localhost:3000/uploads/cafe-products/${fileName}`;
    } else if (
      data.image &&
      data.image.startsWith('http://localhost:3000/uploads/cafe-products/')
    ) {
      imageUrl = data.image;
    }

    return this.prisma.cafeProduct.create({
      data: {
        ...data,
        price: finalPrice, // ✅ Save as USD
        image: imageUrl,
      },
    });
  }

  async updateProduct(
    currentUserId: number,
    id: number,
    data: UpdateCafeProductDto & { currency?: string },
    file?: Express.Multer.File,
  ) {
    const product = await this.prisma.cafeProduct.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');

    let imageUrl = product.image;
    const uploadDir = this.getCafeProductsUploadPath();

    // ✅ Fetch settings for conversion
    const settings = await this.prisma.settings.findUnique({ where: { id: 1 } });
    const usdToIqd = settings?.usdToIqd || 1300;

    // ✅ Currency conversion
    let finalPrice = data.price ?? product.price;
    if (data.price && data.currency === 'IQD') {
      finalPrice = data.price / usdToIqd; // Convert IQD → USD
    }

    // Handle file upload, base64, external URL, local URL (same as before)
    if (file) {
      if (imageUrl) {
        const oldPath = path.join(uploadDir, path.basename(imageUrl));
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }
      const fileName = `${Date.now()}_${file.originalname}`;
      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, file.buffer);
      imageUrl = `http://localhost:3000/uploads/cafe-products/${fileName}`;
    } else if (data.image && /^data:image\/[a-z]+;base64,/.test(data.image)) {
      if (imageUrl) {
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
      imageUrl = `http://localhost:3000/uploads/cafe-products/${fileName}`;
    } else if (
      data.image &&
      /^https?:\/\//i.test(data.image) &&
      !data.image.startsWith('http://localhost:3000/uploads/cafe-products/')
    ) {
      if (imageUrl) {
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
      imageUrl = `http://localhost:3000/uploads/cafe-products/${fileName}`;
    } else if (
      data.image &&
      data.image.startsWith('http://localhost:3000/uploads/cafe-products/')
    ) {
      imageUrl = data.image;
    }

    return this.prisma.cafeProduct.update({
      where: { id },
      data: {
        ...data,
        price: finalPrice, // ✅ Always stored as USD
        image: imageUrl,
      },
    });
  }

  async deleteProduct(currentUserId: number, id: number) {

    const product = await this.prisma.cafeProduct.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');

    // Delete image file if exists and is a local file
    if (product.image && product.image.startsWith('http://localhost:3000/uploads/cafe-products/')) {
      const fileName = path.basename(product.image);
      const filePath = path.join(this.getCafeProductsUploadPath(), fileName);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
    return this.prisma.cafeProduct.delete({ where: { id } });
  }

  private getCafeProductsUploadPath() {
    return path.join(process.cwd(), 'uploads', 'cafe-products');
  }
}