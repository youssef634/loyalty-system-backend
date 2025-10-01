import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolesService } from '../roles/roles.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private rolesService: RolesService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const page = this.reflector.get<string>('page', context.getHandler());
    if (!page) return true; // No page restriction

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user || !user.role) return false;

    // Admin always has access
    if (user.role === 'ADMIN') return true;

    if (user.role === 'USER' && page === 'dashboard') return true;
    
    const hasPermission = await this.rolesService.hasPagePermission(user.role, page);
    if (!hasPermission) throw new ForbiddenException('Access denied');

    return true;
  }
}
