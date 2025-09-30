import { Module } from '@nestjs/common';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports:[RolesModule],
  controllers: [InvoiceController],
  providers: [InvoiceService, CloudPrismaService],
})
export class InvoiceModule {}