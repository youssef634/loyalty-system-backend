import { Module } from '@nestjs/common';
import { PosService } from './pos.service';
import { PosController } from './pos.controller';
import { PrismaService } from '../prisma/prisma.service/prisma.service';
import {PrintService} from './print.service'
import { RolesModule } from '../roles/roles.module';

@Module({
  imports:[RolesModule],
  controllers: [PosController],
  providers: [PosService, PrintService ,PrismaService],
})
export class PosModule {}
