import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Role } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/roles.guard';
import { Permissions } from '../common/permissions.decorator';


@Controller('roles')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post(':role')
  @Permissions('managers')
  createPermissions(
    @Param('role') role: Role,
    @Body() body: { pages: string[] },
  ) {
    return this.rolesService.createPermission(role, body.pages);
  }

  @Patch(':role')
  @Permissions('managers')
  updatePermissions(
    @Param('role') role: Role,
    @Body() body: { pages: string[] },
  ) {
    return this.rolesService.updatePermissions(role, body.pages);
  }

  @Get(':role')
  @Permissions('managers')
  getPermissions(@Param('role') role: Role) {
    return this.rolesService.getPermissions(role);
  }
}