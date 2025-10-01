import { Global, Injectable } from '@nestjs/common';
import { PrismaClient as LocalPrismaClient } from '../generated/local';
import { ConfigService } from '@nestjs/config';

@Global()
@Injectable()
export class LocalPrismaService extends LocalPrismaClient {
  constructor(private configService: ConfigService) {
    super({
      datasources: {
        db: {
          url: configService.get<string>('LOCAL_DATABASE_URL'), // Local DB
        },
      },
    });
  }
}