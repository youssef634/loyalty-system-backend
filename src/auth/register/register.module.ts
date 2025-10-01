import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { ConnectionService } from '../../connection/connection.service';
import { CloudPrismaService } from '../../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../../prisma/prisma.service/local-prisma.service';

@Module({
  imports: [PrismaModule],
  providers: [RegisterService , ConnectionService, CloudPrismaService, LocalPrismaService],
  controllers: [RegisterController],
})
export class RegisterModule {}