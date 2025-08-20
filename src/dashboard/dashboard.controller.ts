import { Controller, Get, Query, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
@UseGuards(AuthGuard('jwt'))
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  async getDashboard(@Request() req) {
    return this.dashboardService.getDashboardData(req.user.id);
  }

  @Get('analytics')
  async getAnalyticsByPeriod(
    @Request() req,
    @Query('period') period: 'day' | 'week' | 'month' | 'year',
    @Query('date') date: string,
  ) {
    return this.dashboardService.getAnalyticsByPeriod(req.user.id, period, date);
  }
}