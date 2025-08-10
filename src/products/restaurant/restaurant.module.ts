import { Module } from '@nestjs/common';
import { RestaurantProductsService } from './restaurant.service';
import { RestaurantProductsController } from './restaurant.controller';

@Module({
  controllers: [RestaurantProductsController],
  providers: [RestaurantProductsService],
})
export class RestaurantProductsModule {}
