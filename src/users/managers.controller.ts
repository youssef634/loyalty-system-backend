import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards , Request} from '@nestjs/common';
import { ManagersService } from './managers.service';
import { CreateUserDto, UpdateUserDto } from '../users/dto/users.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/roles.guard';
import { Permissions } from '../common/permissions.decorator';

@Controller('managers')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class ManagersController {
  constructor(private readonly managersService: ManagersService) { }

  @Get()
  @Permissions('managers')
  findAll() {
    return this.managersService.findAllManagers();
  }

  @Post()
  @Permissions('managers')
  create(@Request() req, @Body() data: CreateUserDto) {
    return this.managersService.createManager(req.user.id, data);
  }

  @Patch(':id')
  @Permissions('managers')
  update(@Request() req, @Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.managersService.updateManager(req.user.id, Number(id), data);
  }

  @Delete(':id')
  @Permissions('managers')
  remove(@Request() req, @Param('id') id: string) {
    return this.managersService.removeManager(req.user.id, Number(id));
  }
}