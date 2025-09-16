import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service/prisma.service';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';

@Module({
  controllers: [InvoiceController],
  providers: [InvoiceService, PrismaService],
})
export class InvoiceModule {}