import { Injectable, BadRequestException, NotFoundException, Logger } from '@nestjs/common';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { PrintService } from './print.service';
import { ConnectionService } from '../connection/connection.service';

@Injectable()
export class PosService {
  private readonly logger = new Logger(PosService.name);

  constructor(
    private cloudPrisma: CloudPrismaService,
    private localPrisma: LocalPrismaService,
    private printService: PrintService,
    private connectionService: ConnectionService,
  ) {}

  async createInvoice(data: {
    userId?: number;
    phone?: string;
    email?: string;
    totalPrice: number;
    discount?: number;
    items: {
      productId: number;
      categoryId: number;
      type: 'cafe' | 'restaurant';
      quantity: number;
      price: number;
      total: number;
    }[];
  }) {
    if (!data.totalPrice || data.totalPrice <= 0) {
      throw new BadRequestException('Invalid total price');
    }
    if (!data.items || data.items.length === 0) {
      throw new BadRequestException('Invoice must have at least one item');
    }

    const isOnline = await this.connectionService.checkConnection();

    if (isOnline) {
      this.logger.log('🌐 Creating invoice in CLOUD database');
      return await this.createInvoiceInCloud(data);
    } else {
      this.logger.warn('📴 OFFLINE mode - Creating invoice in LOCAL database');
      return await this.createInvoiceInLocal(data);
    }
  }

  private async createInvoiceInCloud(data: any) {
    const settings = await this.cloudPrisma.settings.findUnique({ where: { userId: 1 } });
    if (!settings) throw new NotFoundException('Settings not found.');

    const preDiscountTotal = data.items.reduce((sum, item) => sum + item.total, 0);
    const points = settings.enCurrency === 'USD'
      ? preDiscountTotal * settings.pointsPerDollar
      : preDiscountTotal * settings.pointsPerIQD;

    let user = null;
    if (data.userId || data.phone || data.email) {
      user = data.userId
        ? await this.cloudPrisma.user.findUnique({ where: { id: data.userId } })
        : data.phone
        ? await this.cloudPrisma.user.findUnique({ where: { phone: data.phone } })
        : await this.cloudPrisma.user.findUnique({ where: { email: data.email } });
      if (!user) throw new NotFoundException('User not found.');
    }

    // Create invoice and transactions in one atomic transaction
    const result = await this.cloudPrisma.$transaction(async (tx) => {
      const invoice = await tx.invoice.create({
        data: {
          userId: user?.id || null,
          phone: user?.phone || null,
          email: user?.email || null,
          totalPrice: data.totalPrice,
          discount: data.discount ?? 0,
          points,
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
          items: { include: { category: true, cafeProduct: true, restaurantProduct: true } },
        },
      });

      let transaction = null;
      if (user) {
        transaction = await tx.transaction.create({
          data: {
            type: 'earn',
            points,
            userId: user.id,
            invoiceId: invoice.id,
            currency: { enCurrency: settings.enCurrency, arCurrency: settings.arCurrency },
          },
        });

        await tx.user.update({
          where: { id: user.id },
          data: { points: user.points + transaction.points },
        });
      }

      return { invoice, transaction };
    });

    // Print after the transaction is committed
    const receiptFile = await this.printService.invokePrinter(result.invoice.id, 'emulator');
    return { ...result, receiptFile, source: 'cloud' };
  }

  private async createInvoiceInLocal(data: any) {
    const settings = await this.localPrisma.settings.findUnique({ where: { userId: 1 } });
    if (!settings) throw new NotFoundException('Settings not found.');

    const preDiscountTotal = data.items.reduce((sum, item) => sum + item.total, 0);
    const points = settings.enCurrency === 'USD'
      ? preDiscountTotal * settings.pointsPerDollar
      : preDiscountTotal * settings.pointsPerIQD;

    let user = null;
    if (data.userId || data.phone || data.email) {
      user = data.userId
        ? await this.localPrisma.user.findUnique({ where: { id: data.userId } })
        : data.phone
        ? await this.localPrisma.user.findUnique({ where: { phone: data.phone } })
        : await this.localPrisma.user.findUnique({ where: { email: data.email } });
      if (!user) throw new NotFoundException('User not found.');
    }

    const result = await this.localPrisma.$transaction(async (tx) => {
      const invoice = await tx.invoice.create({
        data: {
          userId: user?.id || null,
          phone: user?.phone || null,
          email: user?.email || null,
          totalPrice: data.totalPrice,
          discount: data.discount ?? 0,
          points,
          currency: settings.enCurrency,
          synced: false,
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
          items: { include: { category: true, cafeProduct: true, restaurantProduct: true } },
        },
      });

      if (user) {
        const transaction = await tx.transaction.create({
          data: {
            type: 'earn',
            points,
            userId: user.id,
            invoiceId: invoice.id,
            currency: { enCurrency: settings.enCurrency, arCurrency: settings.arCurrency } as any,
            synced: false,
          },
        });

        await tx.user.update({
          where: { id: user.id },
          data: { points: user.points + transaction.points },
        });
      }

      return { invoice };
    });

    this.logger.warn(`📴 Invoice ${result.invoice.id} created locally - will sync when online`);

    // Emulator receipt
    const receiptFile = await this.printService.invokePrinter(result.invoice.id, 'emulator');
    return { ...result, receiptFile, source: 'local', transaction: null };
  }
}