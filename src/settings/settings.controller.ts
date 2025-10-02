import { Controller, Get, Put, Body, Request, UseGuards, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { AuthGuard } from '@nestjs/passport';
import { Permissions } from '../common/permissions.decorator';
import { RolesGuard } from '../common/roles.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('settings')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class SettingsController {
  constructor(private settingsService: SettingsService) { }

  @Get()
  getSettings(@Request() req) {
    return this.settingsService.getSettings(req.user.id);
  }

  @Post()
  @Permissions('settings')
  @UseInterceptors(FileInterceptor('image'))
  updateSettings(
    @Request() req,
    @Body() body: any,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.settingsService.updateSettings(req.user.id, body, file);
  }
}