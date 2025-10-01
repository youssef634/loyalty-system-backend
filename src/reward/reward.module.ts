import { Module } from '@nestjs/common';
import { RewardService } from './reward.service';
import { RewardController } from './reward.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { RolesModule } from '../roles/roles.module';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../connection/connection.service';

@Module({
  imports: [PrismaModule , RolesModule],
  controllers: [RewardController],
  providers: [RewardService, CloudPrismaService, LocalPrismaService, ConnectionService],
})
export class RewardModule {}
