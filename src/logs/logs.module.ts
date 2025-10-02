import { Module } from '@nestjs/common';
import { LogsService } from './logs.service';
import { LogsController } from './logs.controller';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [RolesModule],
  controllers: [LogsController],
  providers: [LogsService, CloudPrismaService],
})
export class LogsModule {}
