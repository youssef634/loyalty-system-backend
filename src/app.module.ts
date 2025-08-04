import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv'
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service/prisma.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
dotenv.config()

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}), PassportModule.register({defaultStrategy: 'jwt'}), JwtModule.register({
    secret: process.env.JWT_SECRET,
    global: true
    }),
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService, PrismaService,],
})
export class AppModule {}
