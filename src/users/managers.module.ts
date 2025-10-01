import { Module } from '@nestjs/common';
import { CloudPrismaService} from '../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../connection/connection.service';
import { ManagersService } from './managers.service';
import { ManagersController } from './managers.controller';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [RolesModule],
  controllers: [ManagersController],
  providers: [ManagersService, CloudPrismaService ,LocalPrismaService, ConnectionService],
})
export class ManagersModule {}
