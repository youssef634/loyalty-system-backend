import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, Matches, MinLength } from 'class-validator';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^[A-Za-z0-9\s]+$/, {
    message: 'enName must contain only English letters, numbers, and spaces',
  })
  enName: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[\u0600-\u06FF0-9\s]+$/, {
    message: 'arName must contain only Arabic letters, numbers, and spaces',
  })
  arName: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @IsOptional()
  points?: number;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @Matches(/^[A-Za-z0-9\s]+$/, {
    message: 'enName must contain only English letters, numbers, and spaces',
  })
  enName?: string;

  @IsOptional()
  @IsString()
  @Matches(/^[\u0600-\u06FF0-9\s]+$/, {
    message: 'arName must contain only Arabic letters, numbers, and spaces',
  })
  arName?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @IsOptional()
  points?: number;

  @IsOptional()
  @IsString()
  qrCode?: string;
}