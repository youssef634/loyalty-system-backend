import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, Request, Query, Req, } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    // Get users with pagination & filters
    @Get(":page")
    getUsers(
        @Param("page") page: number,
        @Req() req,
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
                enName: enName || undefined,
                arName: arName || undefined,
                email: email || undefined,
                phone: phone || undefined,
            },
        );
    }

    @Post()
    addUser(@Request() req, @Body() data: CreateUserDto) {
        return this.usersService.addUser(req.user.id, data);
    }

    @Delete(':id')
    deleteUser(@Request() req, @Param('id') id: string) {
        return this.usersService.deleteUser(req.user.id, Number(id));
    }

    @Patch(':id')
    updateUser(@Request() req, @Param('id') id: string, @Body() data: UpdateUserDto) {
        return this.usersService.updateUser(req.user.id, Number(id), data);
    }

    @Post('scan-qr')
    scanQr(
        @Req() req,
        @Body() body: { qrData: { id: number; email: string } }
    ) {
        return this.usersService.scanQr(req.user.id, body.qrData);
    }
}