import { IsEmail, IsNotEmpty, IsOptional, isString, IsString, Matches, MinLength, ValidateIf } from 'class-validator';

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
  @IsOptional()
  @IsEmail({}, { message: 'Invalid email format' })
  email?: string;

  @IsOptional()
  @Matches(/^[+]?[\d\s-()]+$/, { message: 'Invalid phone format' })
  phone?: string;

  @IsNotEmpty({ message: 'Password is required' })
  password: string;

  @ValidateIf(o => !o.email && !o.phone)
  @IsNotEmpty({ message: 'Either email or phone must be provided' })
  emailOrPhone?: never;
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
