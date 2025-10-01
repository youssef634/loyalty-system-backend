import { Global, Injectable } from '@nestjs/common';
import { PrismaClient as CloudPrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';

@Global()
@Injectable()
export class CloudPrismaService extends CloudPrismaClient {
  constructor(private configService: ConfigService) {
    super({
      datasources: {
        db: {
          url: configService.get<string>('DATABASE_URL'), // Supabase URL
        },
      },
    });
  }
}