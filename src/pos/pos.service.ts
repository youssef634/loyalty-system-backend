import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service/prisma.service';
import { PrintService } from './print.service';

@Injectable()
export class PosService {
  constructor(
    private prisma: PrismaService,
    private printService: PrintService,
  ) { }

  async createInvoice(data: {
    userId?: number;
    phone?: string;
    email?: string;
    totalPrice: number;
    discount?: number;  
    items: { productId: number; categoryId: number  ,type: 'cafe' | 'restaurant'; quantity: number; price: number; total: number }[];
  }) {
    if (!data.totalPrice || data.totalPrice <= 0) {
      throw new BadRequestException('Invalid total price');
    }
    if (!data.items || data.items.length === 0) {
      throw new BadRequestException('Invoice must have at least one item');
    }

   const settings = await this.prisma.settings.findUnique({ where: { userId: 1 } });
    if (!settings) {
      throw new NotFoundException('Settings not found. Please configure settings first.');
    }

    // 👇 Calculate pre-discount total
    const preDiscountTotal = data.items.reduce((sum, item) => sum + item.total, 0);

    // 👇 Points based on pre-discount total
    let points = 0;
    if (settings.enCurrency === 'USD') {
      points = (preDiscountTotal * settings.pointsPerDollar);
    } else if (settings.enCurrency === 'IQD') {
      points = (preDiscountTotal * settings.pointsPerIQD);
    }

    let user = null;
    if (data.userId || data.phone || data.email) {
      if (data.userId) {
        user = await this.prisma.user.findUnique({ where: { id: data.userId } });
      } else if (data.phone) {
        user = await this.prisma.user.findUnique({ where: { phone: data.phone } });
      } else if (data.email) {
        user = await this.prisma.user.findUnique({ where: { email: data.email } });
      }
      if (!user) throw new NotFoundException('User not found with given identifier');
    }

    // ✅ Create invoice (save discount too)
    const invoice = await this.prisma.invoice.create({
      data: {
        userId: user?.id || null,
        phone: user?.phone || null,
        email: user?.email || null,
        totalPrice: data.totalPrice, // after discount
        discount: data.discount ?? 0, // save discount
        points: points,
        currency: settings.enCurrency,
        items: {
          create: data.items.map((item) => ({
            quantity: item.quantity,
            price: item.price,
            total: item.total,
            categoryId: item.categoryId,
            cafeProductId: item.type === 'cafe' ? item.productId : null,
            restaurantProductId: item.type === 'restaurant' ? item.productId : null,
          })),
        },
      },
      include: {
        items: {
          include: {
            category: true,
            cafeProduct: true,
            restaurantProduct: true,
          },
        },
      },
    });

    let transaction = null;
    let updatedUser = null;

    if (user) {
      transaction = await this.prisma.transaction.create({
        data: {
          type: 'earn',
          points: points,
          userId: user.id,
          invoiceId: invoice.id,
          currency: {
            enCurrency: settings.enCurrency,
            arCurrency: settings.arCurrency,
          },
        },
      });

      updatedUser = await this.prisma.user.update({
        where: { id: user.id },
        data: { points: user.points + transaction.points },
      });
    }

    // ✅ Print receipt
    const receiptFile = await this.printService.printInvoice(invoice.id);

    return { invoice, transaction, receiptFile };
  }
}