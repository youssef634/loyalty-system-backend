import { Controller, Get, Query, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DashboardService } from './dashboard.service';
import { Permissions } from '../common/permissions.decorator';
import { RolesGuard } from '../common/roles.guard';

@Controller('dashboard')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  @Permissions('dashboard')
  async getDashboard(@Request() req) {
    return this.dashboardService.getDashboardData(req.user.id);
  }

  @Get('analytics')
  @Permissions('dashboard')
  async getAnalyticsByPeriod(
    @Request() req,
    @Query('period') period: 'day' | 'week' | 'month' | 'year',
    @Query('date') date: string,
  ) {
    return this.dashboardService.getAnalyticsByPeriod(req.user.id, period, date);
  }
}