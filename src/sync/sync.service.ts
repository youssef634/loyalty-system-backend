import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../connection/connection.service';

@Injectable()
export class SyncService {
  private readonly logger = new Logger(SyncService.name);
  private isSyncing = false;

  constructor(
    private cloudPrisma: CloudPrismaService,
    private localPrisma: LocalPrismaService,
    private connectionService: ConnectionService,
  ) {}

  @Cron(CronExpression.EVERY_30_SECONDS)
  async autoSync() {
    if (this.isSyncing) return;
    const isOnline = await this.connectionService.checkConnection();
    if (!isOnline) return;
    await this.syncLocalToCloud();
  }

  async syncLocalToCloud() {
    if (this.isSyncing) {
      this.logger.warn('Sync already in progress, skipping...');
      return;
    }

    this.isSyncing = true;
    this.logger.log('🔄 Starting sync from local to cloud...');

    try {
      const unsyncedInvoices = await this.localPrisma.invoice.findMany({
        where: { synced: false },
        include: { items: true, transaction: true },
        orderBy: { createdAt: 'asc' },
      });

      this.logger.log(`📦 Found ${unsyncedInvoices.length} unsynced invoices`);

      for (const localInvoice of unsyncedInvoices) {
        try {
          await this.cloudPrisma.$transaction(async (tx) => {
            const cloudInvoice = await tx.invoice.create({
              data: {
                userId: localInvoice.userId,
                phone: localInvoice.phone,
                email: localInvoice.email,
                totalPrice: localInvoice.totalPrice,
                discount: localInvoice.discount,
                points: localInvoice.points,
                currency: localInvoice.currency,
                createdAt: localInvoice.createdAt,
                items: {
                  create: localInvoice.items.map((item) => ({
                    cafeProductId: item.cafeProductId,
                    restaurantProductId: item.restaurantProductId,
                    categoryId: item.categoryId,
                    quantity: item.quantity,
                    price: item.price,
                    total: item.total,
                  })),
                },
              },
            });

            if (localInvoice.transaction) {
              const localTx = localInvoice.transaction;
              await tx.transaction.create({
                data: {
                  type: localTx.type,
                  points: localTx.points,
                  userId: localTx.userId,
                  invoiceId: cloudInvoice.id,
                  cafeProductId: localTx.cafeProductId,
                  restaurantProductId: localTx.restaurantProductId,
                  currency: localTx.currency as any,
                  date: localTx.date,
                  status: localTx.status,
                },
              });

              if (localTx.userId && localTx.type === 'earn') {
                const cloudUser = await tx.user.findUnique({ where: { id: localTx.userId } });
                if (cloudUser) {
                  await tx.user.update({
                    where: { id: localTx.userId },
                    data: { points: cloudUser.points + localTx.points },
                  });
                }
              }
            }
          });

          await this.localPrisma.invoice.update({
            where: { id: localInvoice.id },
            data: { synced: true },
          });

          if (localInvoice.transaction) {
            await this.localPrisma.transaction.update({
              where: { id: localInvoice.transaction.id },
              data: { synced: true },
            });
          }

          this.logger.log(`✅ Synced invoice ${localInvoice.id} to cloud`);
        } catch (error) {
          this.logger.error(`❌ Failed to sync invoice ${localInvoice.id}:`, error);
        }
      }

      this.logger.log('✅ Sync completed successfully');
    } catch (error) {
      this.logger.error('❌ Sync process failed:', error);
    } finally {
      this.isSyncing = false;
    }
  }

  async manualSync() {
    this.logger.log('🔄 Manual sync triggered');
    await this.syncLocalToCloud();
    return { success: true, message: 'Sync completed' };
  }
}
