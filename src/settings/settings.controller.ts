import { Controller, Get, Put, Body, Request, UseGuards, Post } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('settings')
@UseGuards(AuthGuard('jwt'))
export class SettingsController {
  constructor(private settingsService: SettingsService) {}

  @Get()
  getSettings(@Request() req) {
    return this.settingsService.getSettings(req.user.id);
  }

  @Post()
  updateSettings(@Request() req, @Body() body) {
    return this.settingsService.updateSettings(req.user.id, body);
  }
}