import { Module } from '@nestjs/common';
import { SyncService } from './sync.service';
import { SyncController } from './sync.controller';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { ConnectionService } from '../connection/connection.service';

@Module({
  controllers: [SyncController],
  providers: [SyncService, LocalPrismaService, CloudPrismaService, ConnectionService],
  exports: [SyncService],
})
export class SyncModule {}