import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { RolesModule } from '../roles/roles.module';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../connection/connection.service';

@Module({
  imports: [RolesModule],
  controllers: [SettingsController],
  providers: [
    SettingsService,
    CloudPrismaService,
    LocalPrismaService,
    ConnectionService,
  ],
})
export class SettingsModule {}