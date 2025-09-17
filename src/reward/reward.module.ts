import { Module } from '@nestjs/common';
import { RewardService } from './reward.service';
import { RewardController } from './reward.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { RolesModule } from '@src/roles/roles.module';

@Module({
  imports: [PrismaModule , RolesModule],
  controllers: [RewardController],
  providers: [RewardService],
})
export class RewardModule {}
