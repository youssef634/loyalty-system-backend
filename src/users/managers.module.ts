import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service/prisma.service';
import { ManagersService } from './managers.service';
import { ManagersController } from './managers.controller';
import { RolesModule } from '@src/roles/roles.module';

@Module({
  imports: [RolesModule],
  controllers: [ManagersController],
  providers: [ManagersService, PrismaService],
})
export class ManagersModule {}
