import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CloudPrismaService } from './prisma.service/cloud-prisma.service';
import { LocalPrismaService } from './prisma.service/local-prisma.service';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [CloudPrismaService, LocalPrismaService],
  exports: [CloudPrismaService, LocalPrismaService],
})
export class PrismaModule {}
