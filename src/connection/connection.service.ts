import { Injectable, Logger } from '@nestjs/common';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';

@Injectable()
export class ConnectionService {
  private readonly logger = new Logger(ConnectionService.name);
  private isOnline = true;

  constructor(private cloudPrisma: CloudPrismaService) {
    this.startConnectionMonitoring();
  }

  private startConnectionMonitoring() {
    setInterval(async () => {
      this.isOnline = await this.checkConnection();
    }, 10000); // Check every 10 seconds
  }

  async checkConnection(): Promise<boolean> {
    try {
      await this.cloudPrisma.$queryRaw`SELECT 1`;
      if (!this.isOnline) {
        this.logger.log('🌐 Internet connection restored');
      }
      return true;
    } catch (error) {
      if (this.isOnline) {
        this.logger.warn('⚠️ Lost connection to cloud database');
      }
      return false;
    }
  }

  getConnectionStatus(): boolean {
    return this.isOnline;
  }
}