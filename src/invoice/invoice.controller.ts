import { Controller, Delete, Get, Param, ParseIntPipe, Query, UseGuards , Request} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InvoiceService } from './invoice.service';
import { Permissions } from '../common/permissions.decorator';
import { RolesGuard } from '../common/roles.guard';
import { request } from 'express';

@Controller('invoices')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  /** 🔹 GET /invoices/all/:page?limit=20&phone=... */
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

  /** 🔹 DELETE /invoices/:id → delete invoice by id */
  @Delete(':id')
  @Permissions('invoices')
  async deleteInvoice(
    @Request() req,
    @Param('id', ParseIntPipe) id: number) {
    return this.invoiceService.deleteInvoice(req.user.id , id);
  }
}
