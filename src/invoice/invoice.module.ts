import { Module } from '@nestjs/common';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../connection/connection.service';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports:[RolesModule],
  controllers: [InvoiceController],
  providers: [InvoiceService, CloudPrismaService , LocalPrismaService, ConnectionService],
})
export class InvoiceModule {}