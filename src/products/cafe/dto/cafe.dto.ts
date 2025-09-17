import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, IsNumber, Min, Matches } from 'class-validator';

export class CreateCafeProductDto {
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

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  price: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  points: number;
}

export class UpdateCafeProductDto {
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
  image?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  price?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  points?: number;
}