import { Body, Controller, Get, Param, Patch, Post, UseGuards , Request } from '@nestjs/common';
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
    @Request() req,
    @Param('role') role: Role,
    @Body() body: { pages: string[] },
  ) {
    return this.rolesService.createPermission(req.user.id, role, body.pages);
  }

  @Patch(':role')
  @Permissions('managers')
  updatePermissions(
    @Request() req,
    @Param('role') role: Role,
    @Body() body: { pages: string[] },
  ) {
    return this.rolesService.updatePermissions(req.user.id, role, body.pages);
  }

  @Get(':role')
  @Permissions('managers')
  getPermissions(@Param('role') role: Role) {
    return this.rolesService.getPermissions(role);
  }
}