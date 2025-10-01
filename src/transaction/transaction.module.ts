import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { RolesModule } from '../roles/roles.module';
import { CloudPrismaService } from '../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../connection/connection.service';

@Module({
  imports: [PrismaModule , RolesModule],
  controllers: [TransactionController],
  providers: [TransactionService , CloudPrismaService , LocalPrismaService, ConnectionService],
})
export class TransactionModule {}
