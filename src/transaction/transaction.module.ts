import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RolesModule } from '@src/roles/roles.module';

@Module({
  imports: [PrismaModule , RolesModule],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
