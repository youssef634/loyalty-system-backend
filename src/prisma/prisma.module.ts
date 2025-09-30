import { Global, Module } from '@nestjs/common';
import { CloudPrismaService } from './prisma.service/cloud-prisma.service';
import { LocalPrismaService } from './prisma.service/local-prisma.service';

@Global()
@Module({
  providers: [CloudPrismaService, LocalPrismaService],
  exports: [CloudPrismaService, LocalPrismaService],
})
export class PrismaModule {}
