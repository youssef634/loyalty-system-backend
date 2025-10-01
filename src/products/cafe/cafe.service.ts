import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  Logger,
} from '@nestjs/common';
import { CloudPrismaService } from '../../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../../connection/connection.service';
import { CreateCafeProductDto, UpdateCafeProductDto } from './dto/cafe.dto';
import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';

@Injectable()
export class CafeProductsService {
  private readonly logger = new Logger(CafeProductsService.name);

  constructor(
    private cloudPrisma: CloudPrismaService,
    private localPrisma: LocalPrismaService,
    private connectionService: ConnectionService,
  ) { }

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
    const isOnline = this.connectionService.getConnectionStatus();

    if (isOnline) {
      return await this.getProductsCloud(page, filters);
    } else {
      return await this.getProductsLocal(page, filters);
    }
  }

  private async getProductsCloud(page: number, filters?: any) {
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

    const total = await this.cloudPrisma.cafeProduct.count({ where });
    const totalPages = Math.ceil(total / limit);
    if (page > totalPages && total > 0) {
      throw new NotFoundException('Page not found');
    }

    const skip = (page - 1) * limit;

    const products = await this.cloudPrisma.cafeProduct.findMany({
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

  private async getProductsLocal(page: number, filters?: any) {
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

    const total = await this.localPrisma.cafeProduct.count({ where });
    const totalPages = Math.ceil(total / limit);
    if (page > totalPages && total > 0) {
      throw new NotFoundException('Page not found');
    }

    const skip = (page - 1) * limit;

    const products = await this.localPrisma.cafeProduct.findMany({
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
    const isOnline = this.connectionService.getConnectionStatus();

    if (!isOnline) {
      throw new ForbiddenException('Product creation requires internet connection');
    }

    const uploadDir = this.getCafeProductsUploadPath();
    let imageUrl: string | undefined;

    const settings = await this.cloudPrisma.settings.findUnique({ where: { id: 1 } });
    const usdToIqd = settings?.usdToIqd || 1300;

    let finalPrice = data.price;
    if (data.currency === 'IQD') {
      finalPrice = data.price / usdToIqd;
    }

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

    const product = await this.cloudPrisma.cafeProduct.create({
      data: {
        ...data,
        price: finalPrice,
        image: imageUrl,
      },
    });

    // Sync to local
    try {
      await this.localPrisma.cafeProduct.create({
        data: {
          id: product.id,
          enName: product.enName,
          arName: product.arName,
          image: product.image,
          price: product.price,
          points: product.points,
          type: product.type,
          categoryId: product.categoryId,
        },
      });
      this.logger.log(`Product ${product.id} synced to local database`);
    } catch (error) {
      this.logger.warn(`Failed to sync product to local DB: ${error}`);
    }

    return product;
  }

  async updateProduct(
    currentUserId: number,
    id: number,
    data: UpdateCafeProductDto & { currency?: string },
    file?: Express.Multer.File,
  ) {
    const isOnline = this.connectionService.getConnectionStatus();

    if (!isOnline) {
      throw new ForbiddenException('Product updates require internet connection');
    }

    const product = await this.cloudPrisma.cafeProduct.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');

    let imageUrl = product.image;
    const uploadDir = this.getCafeProductsUploadPath();

    const settings = await this.cloudPrisma.settings.findUnique({ where: { id: 1 } });
    const usdToIqd = settings?.usdToIqd || 1300;

    let finalPrice = data.price ?? product.price;
    if (data.price && data.currency === 'IQD') {
      finalPrice = data.price / usdToIqd;
    }

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

    const updatedProduct = await this.cloudPrisma.cafeProduct.update({
      where: { id },
      data: {
        ...data,
        price: finalPrice,
        image: imageUrl,
      },
    });

    // Sync to local
    try {
      await this.localPrisma.cafeProduct.update({
        where: { id },
        data: {
          enName: updatedProduct.enName,
          arName: updatedProduct.arName,
          image: updatedProduct.image,
          price: updatedProduct.price,
          points: updatedProduct.points,
          type: updatedProduct.type,
          categoryId: updatedProduct.categoryId,
        },
      });
      this.logger.log(`Product ${id} update synced to local database`);
    } catch (error) {
      this.logger.warn(`Failed to sync product update to local DB: ${error}`);
    }

    return updatedProduct;
  }

  async deleteProduct(currentUserId: number, id: number) {
    const isOnline = this.connectionService.getConnectionStatus();

    if (!isOnline) {
      throw new ForbiddenException('Product deletion requires internet connection');
    }

    const product = await this.cloudPrisma.cafeProduct.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');

    if (product.image && product.image.startsWith('http://localhost:3000/uploads/cafe-products/')) {
      const fileName = path.basename(product.image);
      const filePath = path.join(this.getCafeProductsUploadPath(), fileName);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await this.cloudPrisma.cafeProduct.delete({ where: { id } });

    // Sync deletion to local
    try {
      await this.localPrisma.cafeProduct.delete({ where: { id } });
      this.logger.log(`Product ${id} deletion synced to local database`);
    } catch (error) {
      this.logger.warn(`Failed to sync product deletion to local DB: ${error}`);
    }

    return product;
  }

  private getCafeProductsUploadPath() {
    return path.join(process.cwd(), 'uploads', 'cafe-products');
  }
}