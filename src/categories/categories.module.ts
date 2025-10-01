import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../connection/connection.service';

@Module({
  controllers: [CategoriesController],
  providers: [
    CategoriesService,
    CloudPrismaService,
    LocalPrismaService,
    ConnectionService,
  ],
  exports: [CategoriesService],
})
export class CategoriesModule {}