import { Controller, Get, Delete, Query, Param, Request, ParseIntPipe, UseGuards, Res } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('transactions')
@UseGuards(AuthGuard('jwt'))
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) { }

    @Get(":page")
    getTransactions(
        @Param('page') page: number,
        @Request() req,
        @Query('limit') limit?: number,
        @Query('id') id?: number,
        @Query('type') type?: string,
        @Query('pointsMin') pointsMin?: number,
        @Query('pointsMax') pointsMax?: number,
        @Query('fromDate')fromDate?: string,
        @Query('toDate')toDate?: string,
        @Query('userId') userId?: number,
        @Query('email') email?: string,
        @Query('cafeProductId') cafeProductId?: number,
        @Query('restaurantProductId') restaurantProductId?: number,
    ) {
        return this.transactionService.getTransactions(req.user.id, Number(page), {
            limit: limit ? Number(limit) : undefined,
            id: id ? Number(id) : undefined,
            type,
            pointsMin: pointsMin ? Number(pointsMin) : undefined,
            pointsMax: pointsMax ? Number(pointsMax) : undefined,
            fromDate,
            toDate,
            userId: userId ? Number(userId) : undefined,
            email,
            cafeProductId: cafeProductId ? Number(cafeProductId) : undefined,
            restaurantProductId: restaurantProductId ? Number(restaurantProductId) : undefined,
        });
    }

    @Delete(':id')
    deleteTransaction(
        @Request() req,
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.transactionService.deleteTransaction(req.user.id, id);
    }
}