import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../connection/connection.service';

@Module({
  controllers: [RolesController],
  providers: [RolesService, CloudPrismaService, LocalPrismaService, ConnectionService],
  exports: [RolesService],
})
export class RolesModule {}