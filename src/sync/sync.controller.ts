import { Controller, Post, Get } from '@nestjs/common';
import { SyncService } from './sync.service';
import { ConnectionService } from '../connection/connection.service';

@Controller('sync')
export class SyncController {
  constructor(
    private syncService: SyncService,
    private connectionService: ConnectionService,
  ) {}

  @Post('manual')
  async manualSync() {
    return await this.syncService.manualSync();
  }

  @Get('status')
  async getSyncStatus() {
    const isOnline = this.connectionService.getConnectionStatus();
    return {
      online: isOnline,
      message: isOnline ? 'Connected to cloud' : 'Operating in offline mode',
    };
  }
}
