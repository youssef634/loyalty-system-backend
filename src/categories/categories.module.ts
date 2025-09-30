import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, CloudPrismaService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
