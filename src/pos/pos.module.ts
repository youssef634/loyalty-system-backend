import { Module } from '@nestjs/common';
import { PosService } from './pos.service';
import { PosController } from './pos.controller';
import { PrismaService } from '../prisma/prisma.service/prisma.service';

@Module({
  controllers: [PosController],
  providers: [PosService, PrismaService],
})
export class PosModule {}
