import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, Request, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
import { AuthGuard } from '@nestjs/passport';
import { Permissions } from '../common/permissions.decorator';
import { RolesGuard } from '../common/roles.guard';

@Controller('users')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get('all-users')
    @Permissions('customers')
    getAllUsers() {
        return this.usersService.getAllUsers(1, 1, {
            limit: 1000,
        });
    }
    // Get users with pagination & filters
    @Get(":page")
    @Permissions('customers')
    getUsers(
        @Param("page") page: number,
        @Request() req,
        @Query('limit') limit?: number,
        @Query('id') id?: number,
        @Query('enName') enName?: string,
        @Query('arName') arName?: string,
        @Query('email') email?: string,
        @Query('phone') phone?: string,
    ) {
        return this.usersService.getAllUsers(
            req.user.id,
            Number(page) || 1,
            {
                id: id ? Number(id) : undefined,
                limit: limit ? Number(limit) : undefined,
                enName: enName || undefined,
                arName: arName || undefined,
                email: email || undefined,
                phone: phone || undefined,
            },
        );
    }

    @Post()
    @Permissions('customers')
    addUser(@Request() req, @Body() data: CreateUserDto) {
        return this.usersService.addUser(req.user.id, data);
    }

    @Delete(':id')
    @Permissions('customers')
    deleteUser(@Request() req, @Param('id') id: string) {
        return this.usersService.deleteUser(req.user.id, Number(id));
    }

    @Patch(':id')
    @Permissions('customers')
    updateUser(@Request() req, @Param('id') id: string, @Body() data: UpdateUserDto) {
        return this.usersService.updateUser(req.user.id, Number(id), data);
    }

    @Post('add-points/:id')
    @Permissions('customers')
    addPoints(
        @Request() req,
        @Param('id') id: string,
        @Body('price') price: number,
    ) {
        return this.usersService.addPoints(
            req.user.id,
            Number(id),
            Number(price)
        );
    }
}