import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { RolesModule } from '../roles/roles.module';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../connection/connection.service';

@Module({
  imports:[RolesModule],
  controllers: [DashboardController],
  providers: [DashboardService,CloudPrismaService,LocalPrismaService,ConnectionService],
})
export class DashboardModule {}