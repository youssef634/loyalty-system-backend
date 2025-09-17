import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { RolesModule } from '@src/roles/roles.module';

@Module({
  imports:[RolesModule],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
