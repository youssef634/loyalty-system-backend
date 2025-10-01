import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { CloudPrismaService } from '../../prisma/prisma.service/cloud-prisma.service';
import { LocalPrismaService } from '../../prisma/prisma.service/local-prisma.service';
import { ConnectionService } from '../../connection/connection.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private config: ConfigService,
    private cloudPrisma: CloudPrismaService,
    private localPrisma: LocalPrismaService,
    private connectionService: ConnectionService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('SECRET'),
    });
  }

  async validate(payload: any) {
    const isOnline = this.connectionService.getConnectionStatus();

    try {
      if (isOnline) {
        const user = await this.cloudPrisma.user.findFirst({
          where: { id: Number(payload.id) },
        });
        if (user) return user;
      } else {
        const user = await this.localPrisma.user.findFirst({
          where: { id: Number(payload.id) },
        });
        if (user) return user;
      }
    } catch (error) {
      // Fallback: if cloud fails, try local
      if (isOnline) {
        try {
          const user = await this.localPrisma.user.findFirst({
            where: { id: Number(payload.id) },
          });
          if (user) return user;
        } catch (localError) {
          throw new UnauthorizedException('User not found');
        }
      }
    }

    throw new UnauthorizedException('User not found');
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = await this.validate(request.user);
    if (user) {
      request.user = user;
      return true;
    }
    return false;
  }
}