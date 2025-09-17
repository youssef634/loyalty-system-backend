import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service/prisma.service';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { RolesModule } from '@src/roles/roles.module';

@Module({
  imports:[RolesModule],
  controllers: [InvoiceController],
  providers: [InvoiceService, PrismaService],
})
export class InvoiceModule {}