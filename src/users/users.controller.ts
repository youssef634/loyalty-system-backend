import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, Request, Query, Req, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
import { ScanQrDto } from './dto/scan-qr.dto';
import { AuthGuard } from '@nestjs/passport';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';

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
    @UseInterceptors(FileInterceptor('qrImage', {
        storage: diskStorage({
            destination: (req, file, cb) => {
                const uploadDir = './uploads/qrcodes';
                // Create directory if it doesn't exist
                if (!fs.existsSync(uploadDir)) {
                    fs.mkdirSync(uploadDir, { recursive: true });
                }
                cb(null, uploadDir);
            },
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                return cb(null, `${randomName}${extname(file.originalname)}`);
            }
        }),
        fileFilter: (req, file, cb) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
                return cb(new Error('Only image files are allowed!'), false);
            }
            cb(null, true);
        }
    }))
    async scanQr(
        @Req() req,
        @UploadedFile() file: Express.Multer.File
    ) {
        return this.usersService.scanQr(req.user.id, file);
    }
}