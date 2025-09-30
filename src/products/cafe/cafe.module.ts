import { Module } from '@nestjs/common';
import { CafeProductsService } from './cafe.service';
import { CafeProductsController } from './cafe.controller';
import { RolesModule } from '../../roles/roles.module';
import { CloudPrismaService } from '../../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../../connection/connection.service';

@Module({
  imports: [RolesModule],
  controllers: [CafeProductsController],
  providers: [
    CafeProductsService,
    CloudPrismaService,
    LocalPrismaService,
    ConnectionService,
  ],
})
export class CafeProductsModule {}