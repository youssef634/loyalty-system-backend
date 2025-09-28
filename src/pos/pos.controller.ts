import { Controller, Post, Body, UseGuards, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PosService } from './pos.service';
import { AuthGuard } from '@nestjs/passport';
import { PrintService } from './print.service';
import { Permissions } from '../common/permissions.decorator';
import { RolesGuard } from '../common/roles.guard';

@Controller('pos')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class PosController {
  constructor(private readonly posService: PosService,
    private readonly printService: PrintService) { }

  @Post()
  @Permissions('pos')
  async createInvoice(
    @Body()
    body: {
      userId?: number;
      phone?: string;
      email?: string;
      totalPrice: number; 
      discount?: number;
      items: { productId: number; categoryId: number ; type: 'cafe' | 'restaurant'; quantity: number; price: number; total: number }[];
    },
  ) {
    return this.posService.createInvoice(body);
  }

  /** 🔹 GET /pos/print/:id → print invoice by id */
  @Get('print/:id')
  @Permissions('pos')
  async printInvoice(@Param('id', ParseIntPipe) invoiceId: number) {
    return this.printService.invokePrinter(invoiceId, 'emulator');
  }
}