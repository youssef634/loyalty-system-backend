import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { CloudPrismaService} from '../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../connection/connection.service';
import { RolesModule } from '../roles/roles.module';

@Module({
    imports: [RolesModule],
    controllers: [ReportController],
    providers: [ReportService, CloudPrismaService , LocalPrismaService, ConnectionService],
})
export class ReportModule { }