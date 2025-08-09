import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('api/dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('stats')
  async getStats() {
    return this.dashboardService.getStats();
  }

  @Get('points-trend')
  async getPointsTrend() {
    return this.dashboardService.getPointsTrend();
  }

  @Get('recent-users')
  async getRecentUsers() {
    return this.dashboardService.getRecentUsers();
  }
}
