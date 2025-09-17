import { Controller, Get, Param, Patch, Body, Request, UseGuards, ParseIntPipe, Query, Delete, Req } from '@nestjs/common';
import { RewardService } from './reward.service';
import { AuthGuard } from '@nestjs/passport';
import { Permissions } from '../common/permissions.decorator';
import { RolesGuard } from '../common/roles.guard';

@Controller('rewards')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class RewardController {
    constructor(private readonly rewardService: RewardService) { }

    @Get(':page')
    getRewards(
        @Request() req,
        @Param('page') page: number,
        @Query('limit') limit?: number,
        @Query('id') id?: number,
        @Query('type') type?: string,
        @Query('status') status?: string,
        @Query('fromDate') fromDate?: string,
        @Query('toDate') toDate?: string,
        @Query('userId') userId?: number,
    ) {
        return this.rewardService.getRewards(req.user.id, Number(page), {
            limit: limit ? Number(limit) : undefined,
            id: id ? Number(id) : undefined,
            type,
            status,
            fromDate,
            toDate,
            userId: userId ? Number(userId) : undefined,
        });
    }

    @Patch('approve')
    @Permissions('rewards')
    approveRewards(
        @Request() req,
        @Body('rewardIds') rewardIds: number[]
    ) {
        return this.rewardService.approveRewards(req.user.id, rewardIds);
    }

    @Patch('reject')
    @Permissions('rewards')
    rejectRewards(
        @Request() req,
        @Body('rewardIds') rewardIds: number[],
        @Body('note') note?: string
    ) {
        return this.rewardService.rejectRewards(req.user.id, rewardIds, note);
    }

    @Delete()
    @Permissions('rewards')
    async deleteRewards(
        @Req() req,
        @Body('rewardIds') rewardIds: number[],
    ) {
        const adminId = req.user.id;
        return this.rewardService.deleteRewards(adminId, rewardIds);
    }
}