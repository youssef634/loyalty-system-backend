import { IsEmail, IsNotEmpty, IsOptional, isString, IsString, Matches, MinLength } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
   enName: string;

  @IsNotEmpty()
  @IsString()
  arName: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @IsString()
  confirmPassword: string;
}

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  emailOrPhone: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class UpdateNameDto {
  @IsOptional()
  @IsString()
  @Matches(/^[A-Za-z\s]+$/, { message: 'enName must contain only English letters' })
  enName?: string;

  @IsOptional()
  @IsString()
  @Matches(/^[\u0600-\u06FF\s]+$/, { message: 'arName must contain only Arabic letters' })
  arName?: string;
}

export class UpdatePasswordDto {
  @IsNotEmpty()
  oldPassword: string;

  @IsNotEmpty()
  newPassword: string;

  @IsNotEmpty()
  confirmPassword: string;
}
