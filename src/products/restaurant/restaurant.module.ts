import { Module } from '@nestjs/common';
import { RestaurantProductsService } from './restaurant.service';
import { RestaurantProductsController } from './restaurant.controller';
import { RolesModule } from '../../roles/roles.module';

@Module({
  imports: [RolesModule],
  controllers: [RestaurantProductsController],
  providers: [RestaurantProductsService],
})
export class RestaurantProductsModule { }
