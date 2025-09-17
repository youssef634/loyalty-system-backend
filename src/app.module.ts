import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service/prisma.service';
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
    
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService, PrismaService, JwtStrategy],
})
export class AppModule { }
