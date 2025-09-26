import { Controller, Get, Post, Delete, Query, Param, Request, ParseIntPipe, UseGuards, Res, Req, Body } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { AuthGuard } from '@nestjs/passport';
import { TransactionStatus } from '@prisma/client';
import { Permissions } from '../common/permissions.decorator';
import { RolesGuard } from '../common/roles.guard';

@Controller('transactions')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) { }

    @Get('all-transactions')
    @Permissions('transactions')
    getAllTransactions() {
        return this.transactionService.getAllTransactions();
    }
    @Get(":page")
    getTransactions(
        @Param('page') page: number,
        @Request() req,
        @Query('limit') limit?: number,
        @Query('id') id?: number,
        @Query('type') type?: string,
        @Query('pointsMin') pointsMin?: number,
        @Query('pointsMax') pointsMax?: number,
        @Query('fromDate') fromDate?: string,
        @Query('toDate') toDate?: string,
        @Query('userId') userId?: number,
        @Query('email') email?: string,
        @Query('cafeProductId') cafeProductId?: number,
        @Query('restaurantProductId') restaurantProductId?: number,
        @Query('status') status?: TransactionStatus,
        @Query('sortBy') sortBy?: string,
        @Query('sortOrder') sortOrder?: 'asc' | 'desc',
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
            status,
            sortBy,
            sortOrder
        });
    }

    @Delete(':id')
    @Permissions('transactions')
    async deleteTransaction(
        @Request() req,
        @Param('id', ParseIntPipe) id: number
    ) {
        await this.transactionService.cancelTransaction(req.user.id, id);
        return this.transactionService.deleteTransaction(req.user.id, id);
    }

    @Delete()
    @Permissions('transactions')
    async deleteTransactions(
        @Request() req,
        @Body('ids') ids: number[]
    ) {
        return this.transactionService.deleteTransactions(req.user.id, ids);
    }

    @Post(':id/cancel')
    @Permissions('transactions')
    async cancelTransaction(
        @Req() req,
        @Param('id', ParseIntPipe) transactionId: number
    ) {
        return this.transactionService.cancelTransaction(req.user.id, transactionId);
    }
}