import { Module } from '@nestjs/common';
import { CafeProductsService } from './cafe.service';
import { CafeProductsController } from './cafe.controller';
import { RolesModule } from '../../roles/roles.module';

@Module({
  imports: [RolesModule],
  controllers: [CafeProductsController],
  providers: [CafeProductsService],
})
export class CafeProductsModule { }
