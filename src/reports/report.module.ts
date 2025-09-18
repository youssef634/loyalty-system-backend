import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { PrismaService } from '../prisma/prisma.service/prisma.service';
import { RolesModule } from '../roles/roles.module';

@Module({
    imports: [RolesModule],
    controllers: [ReportController],
    providers: [ReportService, PrismaService],
})
export class ReportModule { }