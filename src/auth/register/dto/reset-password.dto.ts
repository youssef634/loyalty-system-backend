import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class ResetPasswordRequestDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class ResetPasswordDto {
  @IsNotEmpty()
  @MinLength(6)
  newPassword: string;
}