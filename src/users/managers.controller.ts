import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ManagersService } from './managers.service';
import { CreateUserDto, UpdateUserDto } from '../users/dto/users.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/roles.guard';
import { Permissions } from '../common/permissions.decorator';

@Controller('managers')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class ManagersController {
  constructor(private readonly managersService: ManagersService) {}

  @Post()
  @Permissions('managers')
  create(@Body() data: CreateUserDto) {
    return this.managersService.createManager(data);
  }

  @Get()
  @Permissions('managers')
  findAll() {
    return this.managersService.findAllManagers();
  }

  @Patch(':id')
  @Permissions('managers')
  update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.managersService.updateManager(Number(id), data);
  }

  @Delete(':id')
  @Permissions('managers')
  remove(@Param('id') id: string) {
    return this.managersService.removeManager(Number(id));
  }
}