import { Module } from '@nestjs/common';
import { RestaurantProductsService } from './restaurant.service';
import { RestaurantProductsController } from './restaurant.controller';
import { RolesModule } from '../../roles/roles.module';
import { CloudPrismaService } from '../../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../../connection/connection.service';

@Module({
  imports: [RolesModule],
  controllers: [RestaurantProductsController],
  providers: [
    RestaurantProductsService,
    CloudPrismaService,
    LocalPrismaService,
    ConnectionService,
  ],
})
export class RestaurantProductsModule {}