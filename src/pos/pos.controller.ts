import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { PosService } from './pos.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('pos')
@UseGuards(AuthGuard('jwt'))
export class PosController {
  constructor(private readonly posService: PosService) {}

  @Post()
  async createInvoice(
    @Body()
    body: {
      userId?: number;
      phone?: string;
      email?: string;
      totalPrice: number;
      items: { productId: number; type: 'cafe' | 'restaurant'; quantity: number; price: number; total: number}[];
    },
  ) {
    return this.posService.createInvoice(body);
  }
}