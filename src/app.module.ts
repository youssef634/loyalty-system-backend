import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConnectionService } from './connection/connection.service';
import { CloudPrismaService } from './prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from './prisma/prisma.service/local-prisma.service';
import { RegisterModule } from './auth/register/register.module';
import { JwtStrategy } from './auth/strategy';
import { UsersModule } from './users/users.module';
import { CafeProductsModule } from './products/cafe/cafe.module';
import { RestaurantProductsModule } from './products/restaurant/restaurant.module';
import { TransactionModule } from './transaction/transaction.module';
import { SettingsModule } from './settings/settings.module';
import { RedeemModule } from './redeem/redeem.module';
import { RewardModule } from './reward/reward.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PosModule } from './pos/pos.module';
import { InvoiceModule } from './invoice/invoice.module';
import { RolesModule } from './roles/roles.module';
import { CategoriesModule } from './categories/categories.module';
import { ManagersModule } from './users/managers.module';
import { ReportModule } from './reports/report.module';
import { SyncModule } from './sync/sync.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    PassportModule.register({ defaultStrategy: 'jwt' }),

    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const secret = config.get<string>('SECRET');
        return {
          secret,
          signOptions: { expiresIn: '7d' },
        };
      },
      global: true,
    }),

    PrismaModule,
    RegisterModule,
    UsersModule,
    CafeProductsModule,
    RestaurantProductsModule,
    TransactionModule,
    SettingsModule,
    RedeemModule,
    RewardModule,
    DashboardModule,
    PosModule,
    InvoiceModule,
    RolesModule,
    CategoriesModule,
    ManagersModule,
    ReportModule,
    SyncModule,
    
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService, CloudPrismaService, LocalPrismaService , ConnectionService, JwtStrategy],
})
export class AppModule { }
