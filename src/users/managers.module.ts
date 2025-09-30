import { Module } from '@nestjs/common';
import { CloudPrismaService} from '../prisma/prisma.service/cloud-prisma.service';
import { ManagersService } from './managers.service';
import { ManagersController } from './managers.controller';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [RolesModule],
  controllers: [ManagersController],
  providers: [ManagersService, CloudPrismaService],
})
export class ManagersModule {}
