import { Controller, Get, Query, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ReportService } from './report.service';
import { AuthGuard } from '@nestjs/passport';
import { Permissions } from '../common/permissions.decorator';
import { RolesGuard } from '../common/roles.guard';
import { Role } from '@prisma/client';
import moment from 'moment-timezone';
import { PrismaService } from '../prisma/prisma.service/prisma.service';

@Controller('reports')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class ReportController {
    constructor(private readonly reportService: ReportService
        , private prisma: PrismaService
    ) { }

    /** 1- Manager Report */
    @Get('managers')
    @Permissions('reports')
    managerReport(@Query('role') role?: Role) {
        return this.reportService.managerReport(role);
    }

    /** 2- Customers Report */
    @Get('customers')
    @Permissions('reports')
    customersReport() {
        return this.reportService.customersReport();
    }

    /** 3- Individual Customer Report (search by id or phone) */
    @Get('customers/search')
    @Permissions('reports')
    customerReport(@Query('id') id?: number, @Query('phone') phone?: string) {
        return this.reportService.customerReport({
            id: id ? Number(id) : undefined,
            phone,
        });
    }

    /** 4- Transactions Report */
    @Get('transactions')
    @Permissions('reports')
    async transactionsReport(
        @Query('type') type?: string,
        @Query('startDate') startDate?: string,
        @Query('endDate') endDate?: string,
    ) {
        const settings = await this.prisma.settings.findUnique({ where: { id: 1 } });
        const tz = settings?.timezone || 'UTC';

        let parsedStartDate: Date | undefined;
        let parsedEndDate: Date | undefined;

        if (startDate) {
            parsedStartDate = moment.tz(startDate, tz).startOf('day').toDate();
        }

        if (endDate) {
            parsedEndDate = moment.tz(endDate, tz).endOf('day').toDate();
        }

        return this.reportService.transactionsReport({
            type,
            startDate: parsedStartDate,
            endDate: parsedEndDate,
        });
    }

    /** 5- Products Report */
    @Get('products')
    @Permissions('reports')
    productsReport(@Query('type') type?: string, @Query('categoryId') categoryId?: number) {
        return this.reportService.productsReport({
            type,
            categoryId: categoryId ? Number(categoryId) : undefined,
        });
    }

    /** 6- Rewards Report */
    @Get('rewards')
    @Permissions('reports')
    async rewardsReport(
        @Query('type') type?: string,
        @Query('startDate') startDate?: string,
        @Query('endDate') endDate?: string,
    ) {
        const settings = await this.prisma.settings.findUnique({ where: { id: 1 } });
        const tz = settings?.timezone || 'UTC';

        let parsedStartDate: Date | undefined;
        let parsedEndDate: Date | undefined;

        if (startDate) {
            parsedStartDate = moment.tz(startDate, tz).startOf('day').toDate();
        }

        if (endDate) {
            parsedEndDate = moment.tz(endDate, tz).endOf('day').toDate();
        }

        return this.reportService.rewardsReport({
            type,
            startDate: parsedStartDate,
            endDate: parsedEndDate,
        });
    }

    /** 7- Invoices Report */
    @Get('invoices')
    @Permissions('reports')
    async invoicesReport(
        @Query('phone') phone?: string,
        @Query('startDate') startDate?: string,
        @Query('endDate') endDate?: string,
        @Query('minPoints') minPoints?: number,
        @Query('maxPoints') maxPoints?: number,
        @Query('minPrice') minPrice?: number,
        @Query('maxPrice') maxPrice?: number,
    ) {
        const settings = await this.prisma.settings.findUnique({ where: { id: 1 } });
        const tz = settings?.timezone || 'UTC';

        let parsedStartDate: Date | undefined;
        let parsedEndDate: Date | undefined;

        if (startDate) {
            parsedStartDate = moment.tz(startDate, tz).startOf('day').toDate();
        }

        if (endDate) {
            parsedEndDate = moment.tz(endDate, tz).endOf('day').toDate();
        }

        return this.reportService.invoicesReport({
            phone,
            startDate: parsedStartDate,
            endDate: parsedEndDate,
            minPoints: minPoints ? Number(minPoints) : undefined,
            maxPoints: maxPoints ? Number(maxPoints) : undefined,
            minPrice: minPrice ? Number(minPrice) : undefined,
            maxPrice: maxPrice ? Number(maxPrice) : undefined,
        });
    }
}