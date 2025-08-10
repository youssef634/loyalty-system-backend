import { Module } from '@nestjs/common';
import { CafeProductsService } from './cafe.service';
import { CafeProductsController } from './cafe.controller';

@Module({
  controllers: [CafeProductsController],
  providers: [CafeProductsService],
})
export class CafeProductsModule {}
