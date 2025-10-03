import { Controller, Get, Param, Query, ParseIntPipe, Req, UseGuards } from '@nestjs/common';
import { LogsService } from './logs.service';
import { AuthGuard } from '@nestjs/passport';
import { Permissions } from '../common/permissions.decorator';
import { RolesGuard } from '../common/roles.guard';

@Controller('logs')
export class LogsController {
    constructor(private readonly logsService: LogsService) { }

    @Get(':page')
    @Permissions('logs')
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    async getLogs(
        @Param('page', ParseIntPipe) page: number,
        @Req() req,
        @Query('table') table?: string,
        @Query('screen') screen?: string,
        @Query('userName') userName?: string,
        @Query('date') date?: string,
        @Query('fromDate') fromDate?: string,
        @Query('toDate') toDate?: string,
        @Query('limit') limit?: number,
    ) {
        return this.logsService.getLogs(req.user.id, page, {
            table,
            screen,
            userName,
            date,
            fromDate,
            toDate,
            limit: limit ? Number(limit) : undefined,
        });
    }
}
