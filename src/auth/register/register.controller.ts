import {Body,Controller,Get,Post,Put,UseGuards,Request,} from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterDto, LoginDto, UpdateNameDto, UpdatePasswordDto } from './dto/register.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class RegisterController {
    constructor(private readonly registerService: RegisterService) { }

    @Post('register')
    signup(@Body() data: RegisterDto) {
        return this.registerService.signUp(data);
    }

    @Post('login')
    login(@Body() data: LoginDto) {
        return this.registerService.login(data);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req: any) {
        return this.registerService.getProfile(req.user.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('update-name')
    updateName(@Request() req: any, @Body() body: UpdateNameDto) {
        return this.registerService.updateName(req.user.id, body);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('update-password')
    updatePassword(@Request() req: any, @Body() body: UpdatePasswordDto) {
        return this.registerService.updatePassword(req.user.id, body);
    }
}
