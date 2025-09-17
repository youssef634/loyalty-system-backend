import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Min, Matches } from 'class-validator';

export class CreateRestaurantProductDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^[A-Za-z\s]+$/, { message: 'enName must contain only English letters' })
  enName: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[\u0600-\u06FF\s]+$/, { message: 'arName must contain only Arabic letters' })
  arName: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  categoryId?: number;

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

export class UpdateRestaurantProductDto {
  @IsOptional()
  @IsString()
  @Matches(/^[A-Za-z\s]+$/, { message: 'enName must contain only English letters' })
  enName?: string;

  @IsOptional()
  @IsString()
  @Matches(/^[\u0600-\u06FF\s]+$/, { message: 'arName must contain only Arabic letters' })
  arName?: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  categoryId?: number;

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