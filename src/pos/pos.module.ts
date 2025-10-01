import { Module } from '@nestjs/common';
import { PosService } from './pos.service';
import { PosController } from './pos.controller';
import { PrintService } from './print.service';
import { ConnectionService } from '../connection/connection.service';
import { RolesModule } from '../roles/roles.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [RolesModule, PrismaModule],
  controllers: [PosController],
  providers: [PosService, PrintService, ConnectionService],
  exports: [PosService],
})
export class PosModule {}
