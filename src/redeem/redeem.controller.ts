import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { RedeemService } from './redeem.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('redeem')
@UseGuards(AuthGuard('jwt'))
export class RedeemController {
  constructor(private readonly redeemService: RedeemService) {}

  @Post()
  redeem(
    @Request() req,
    @Body('productId') productId: number,
    @Body('type') type: 'cafe' | 'restaurant',
  ) {
    return this.redeemService.redeemPoints(req.user.id, Number(productId), type);
  }
}