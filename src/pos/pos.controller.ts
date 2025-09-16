import { Controller, Post, Body, UseGuards, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PosService } from './pos.service';
import { AuthGuard } from '@nestjs/passport';
import { PrintService } from './print.service';

@Controller('pos')
@UseGuards(AuthGuard('jwt'))
export class PosController {
  constructor(private readonly posService: PosService,
    private readonly printService: PrintService) { }

  @Post()
  async createInvoice(
    @Body()
    body: {
      userId?: number;
      phone?: string;
      email?: string;
      totalPrice: number; 
      discount?: number;
      items: { productId: number; type: 'cafe' | 'restaurant'; quantity: number; price: number; total: number }[];
    },
  ) {
    return this.posService.createInvoice(body);
  }

  /** 🔹 GET /pos/print/:id → print invoice by id */
  @Get('print/:id')
  async printInvoice(@Param('id', ParseIntPipe) invoiceId: number) {
    return this.printService.printInvoice(invoiceId);
  }
}