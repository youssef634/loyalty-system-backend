import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../connection/connection.service';

@Injectable()
export class SyncService {
  private readonly logger = new Logger(SyncService.name);
  private isSyncing = false;
  private lastSyncAttempt = 0;

  constructor(
    private cloudPrisma: CloudPrismaService,
    private localPrisma: LocalPrismaService,
    private connectionService: ConnectionService,
  ) { }

  @Cron(CronExpression.EVERY_30_MINUTES)
  async autoSync() {
    const now = Date.now();
    // Prevent rapid re-triggers within the same instance
    if (now - this.lastSyncAttempt < 55000) {
      this.logger.warn('🔄 Auto-sync skipped - triggered too soon after previous attempt');
      return;
    }

    if (this.isSyncing) {
      this.logger.warn('🔄 Auto-sync skipped - previous sync still in progress');
      return;
    }

    // Check connection
    const isOnline = await this.connectionService.checkConnection();
    if (!isOnline) {
      this.logger.warn('🔄 Auto-sync skipped - no internet connection');
      return;
    }

    // Check sync status
    const status = await this.getSyncStatus();
    this.logger.log(
      `🔄 Sync status: ${status.unsyncedInvoices} invoices, ${status.unsyncedTransactions} transactions, ${status.unsyncedRewards} rewards, total: ${status.totalUnsynced}`,
    );

    if (status.totalUnsynced === 0) {
      this.logger.log('🔄 Auto-sync skipped - no unsynced items found');
      return;
    }

    this.lastSyncAttempt = now;
    this.logger.log(`🔄 Auto-sync triggered - ${status.totalUnsynced} items to sync`);
    await this.syncLocalToCloud();
  }

  async syncLocalToCloud() {
    if (this.isSyncing) {
      this.logger.warn('🔄 Sync already in progress, skipping...');
      return;
    }

    this.isSyncing = true;
    this.logger.log('🔄 Starting sync from local to cloud...');

    try {
      // Sync invoices first
      await this.syncInvoices();

      // Then sync rewards
      await this.syncRewards();

      this.logger.log('✅ Full sync completed successfully');
    } catch (error) {
      this.logger.error('❌ Sync process failed:', error);
    } finally {
      this.isSyncing = false;
    }
  }

  private async syncInvoices() {
    const unsyncedInvoices = await this.localPrisma.invoice.findMany({
      where: { synced: false },
      include: { items: true, transaction: true },
      orderBy: { createdAt: 'asc' },
    });

    this.logger.log(`📦 Found ${unsyncedInvoices.length} unsynced invoices`);

    for (const localInvoice of unsyncedInvoices) {
      try {
        await this.cloudPrisma.$transaction(async (tx) => {
          // Check if invoice already exists in cloud
          const existingInvoice = await tx.invoice.findUnique({
            where: { id: localInvoice.id },
          });

          if (existingInvoice) {
            this.logger.log(`⏭️ Invoice ${localInvoice.id} already exists in cloud, marking as synced`);
            return;
          }

          const cloudInvoice = await tx.invoice.create({
            data: {
              id: localInvoice.id,
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
                  id: item.id,
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
                id: localTx.id,
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
  }

  private async syncRewards() {
    const unsyncedRewards = await this.localPrisma.myReward.findMany({
      where: { synced: false },
      orderBy: { date: 'asc' },
    });

    this.logger.log(`🎁 Found ${unsyncedRewards.length} unsynced rewards`);

    for (const localReward of unsyncedRewards) {
      try {
        // Check if reward already exists in cloud
        const existingReward = await this.cloudPrisma.myReward.findUnique({
          where: { id: localReward.id },
        });

        if (existingReward) {
          await this.localPrisma.myReward.update({
            where: { id: localReward.id },
            data: { synced: true },
          });
          this.logger.log(`⏭️ Reward ${localReward.id} already exists in cloud, marked as synced`);
          continue;
        }

        // Create reward in cloud and update user points
        await this.cloudPrisma.$transaction(async (tx) => {
          await tx.myReward.create({
            data: {
              id: localReward.id,
              userId: localReward.userId,
              cafeProductId: localReward.cafeProductId,
              restaurantProductId: localReward.restaurantProductId,
              points: localReward.points,
              type: localReward.type,
              status: localReward.status,
              date: localReward.date,
              note: localReward.note,
            },
          });

          if (localReward.status === 'REJECTED') {
            const cloudUser = await tx.user.findUnique({
              where: { id: localReward.userId },
            });
            if (cloudUser) {
              await tx.user.update({
                where: { id: localReward.userId },
                data: { points: cloudUser.points + localReward.points },
              });
            }
          } else if (localReward.status === 'APPROVED') {
            this.logger.log(`Approved reward synced for user ${localReward.userId}`);
          }
        });

        await this.localPrisma.myReward.update({
          where: { id: localReward.id },
          data: { synced: true },
        });

        this.logger.log(`✅ Synced reward ${localReward.id} (${localReward.status}) to cloud`);
      } catch (error) {
        this.logger.error(`❌ Failed to sync reward ${localReward.id}:`, error);
      }
    }
  }

  async manualSync() {
    this.logger.log('🔄 Manual sync triggered');
    await this.syncLocalToCloud();
    return { success: true, message: 'Sync completed' };
  }

  async getSyncStatus() {
    const unsyncedInvoices = await this.localPrisma.invoice.count({
      where: { synced: false },
    });

    const unsyncedTransactions = await this.localPrisma.transaction.count({
      where: { synced: false },
    });

    const unsyncedRewards = await this.localPrisma.myReward.count({
      where: { synced: false },
    });

    const totalUnsynced = unsyncedInvoices + unsyncedTransactions + unsyncedRewards;

    return {
      unsyncedInvoices,
      unsyncedTransactions,
      unsyncedRewards,
      totalUnsynced,
      isSyncing: this.isSyncing,
    };
  }
}