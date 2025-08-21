import { Controller, Get, Param, Patch, Body, Request, UseGuards, ParseIntPipe, Query, Delete } from '@nestjs/common';
import { RewardService } from './reward.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('rewards')
@UseGuards(AuthGuard('jwt'))
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


    @Patch(':id/approve')
    approveReward(@Request() req, @Param('id', ParseIntPipe) id: number) {
        return this.rewardService.approveReward(req.user.id, id);
    }

    @Patch(':id/reject')
    rejectReward(
        @Request() req,
        @Param('id', ParseIntPipe) id: number,
        @Body('note') note?: string,
    ) {
        return this.rewardService.rejectReward(req.user.id, id, note);
    }

    @Patch('approve-many')
    approveRewards(
        @Request() req,
        @Body('rewardIds') rewardIds: number[]
    ) {
        return this.rewardService.approveRewards(req.user.id, rewardIds);
    }

    @Patch('reject-many')
    rejectRewards(
        @Request() req,
        @Body('rewardIds') rewardIds: number[],
        @Body('note') note?: string
    ) {
        return this.rewardService.rejectRewards(req.user.id, rewardIds, note);
    }

    @Delete('delete-rejected')
    deleteRejectedRewards(@Request() req) {
        return this.rewardService.deleteRejectedRewards(req.user.id);
    }
}
