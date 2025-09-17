import { Controller, Get, Param, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InvoiceService } from './invoice.service';
import { Permissions } from '../common/permissions.decorator';
import { RolesGuard } from '../common/roles.guard';

@Controller('invoices')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  /** 🔹 GET /invoices/all/:page?page=1&limit=20&phone=... */
  @Get('all/:page')
  @Permissions('invoices')
  async getAllInvoices(
    @Param('page', ParseIntPipe) page: number,
    @Query() filters: any,
  ) {
    return this.invoiceService.getAllInvoices(page, filters);
  }

  /** 🔹 GET /invoices/:id → get invoice + items */
  @Get(':id')
  @Permissions('invoices')
  async getInvoiceById(@Param('id', ParseIntPipe) id: number) {
    return this.invoiceService.getInvoiceById(id);
  }
}
