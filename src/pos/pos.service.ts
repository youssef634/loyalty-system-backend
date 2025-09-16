import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service/prisma.service';

@Injectable()
export class PosService {
  constructor(private prisma: PrismaService) {}

  async createInvoice(data: {
    userId?: number;
    phone?: string;
    email?: string;
    totalPrice: number;
    items: { productId: number; type: 'cafe' | 'restaurant'; quantity: number; price: number; total: number }[];
  }) {
    if (!data.totalPrice || data.totalPrice <= 0) {
      throw new BadRequestException('Invalid total price');
    }

    if (!data.items || data.items.length === 0) {
      throw new BadRequestException('Invoice must have at least one item');
    }

    // 🔹 Get settings
    const settings = await this.prisma.settings.findFirst();
    if (!settings) {
      throw new NotFoundException('Settings not found. Please configure settings first.');
    }

    const selectedCurrency = settings.enCurrency;

    // 🔹 Calculate points
    let points = 0;
    if (selectedCurrency === 'USD') {
      points = Math.floor(data.totalPrice * settings.pointsPerDollar);
    } else if (selectedCurrency === 'IQD') {
      points = Math.floor(data.totalPrice * settings.pointsPerIQD);
    } else {
      throw new BadRequestException('Invalid currency. Use USD or IQD.');
    }

    let user = null;

    // 🔹 If user info provided → check existence BEFORE creating invoice
    if (data.userId || data.phone || data.email) {
      if (data.userId) {
        user = await this.prisma.user.findUnique({ where: { id: data.userId } });
      } else if (data.phone) {
        user = await this.prisma.user.findUnique({ where: { phone: data.phone } });
      } else if (data.email) {
        user = await this.prisma.user.findUnique({ where: { email: data.email } });
      }

      if (!user) {
        throw new NotFoundException('User not found with given identifier');
      }
    }

    // 🔹 Create invoice
    const invoice = await this.prisma.invoice.create({
      data: {
        userId: user?.id || null,
        phone:  user?.phone || null,
        email:  user?.email || null,
        totalPrice: data.totalPrice,
        points,
        items: {
          create: data.items.map((item) => ({
            quantity: item.quantity,
            price: item.price,
            total: item.total,
            cafeProductId: item.type === 'cafe' ? item.productId : null,
            restaurantProductId: item.type === 'restaurant' ? item.productId : null,
          })),
        },
      },
      include: { items: true },
    });

    let transaction = null;
    let updatedUser = null;

    // 🔹 If user exists → create transaction FIRST then update user points
    if (user) {
      transaction = await this.prisma.transaction.create({
        data: {
          type: 'earn',
          points,
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
        select: {
          id: true,
          enName: true,
          arName: true,
          email: true,
          phone: true,
          role: true,
          points: true,
          profileImage: true,
          qrCode: true,
          createdAt: true,
        },
      });
    }

    return { invoice, transaction, updatedUser };
  }
}