import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ReportService } from './report.service';
import { AuthGuard } from '@nestjs/passport';
import { Permissions } from '../common/permissions.decorator';
import { RolesGuard } from '../common/roles.guard';

@Controller('reports')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class ReportController {
    constructor(private readonly reportService: ReportService) { }

    /** 1- Customers Report */
    @Get('customers')
    @Permissions('reports')
    customersReport() {
        return this.reportService.customersReport();
    }

    /** 2- Individual Customer Report */
    @Get('customers/:id')
    @Permissions('reports')
    customerReport(@Param('id', ParseIntPipe) id: number) {
        return this.reportService.customerReport(id);
    }

    /** 3- Products Report */
    @Get('products')
    @Permissions('reports')
    productsReport() {
        return this.reportService.productsReport();
    }

    /** 4- Rewards Report */
    @Get('rewards')
    @Permissions('reports')
    rewardsReport() {
        return this.reportService.rewardsReport();
    }
}