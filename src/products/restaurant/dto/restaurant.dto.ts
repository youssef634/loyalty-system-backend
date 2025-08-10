import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Min, Matches } from 'class-validator';

// Arabic regex: matches Arabic characters only
const ARABIC_REGEX = /^[\u0600-\u06FF\s]+$/;
// English regex: matches English letters only
const ENGLISH_REGEX = /^[A-Za-z\s]+$/;

export class CreateRestaurantProductDto {
  @IsNotEmpty()
  @IsString()
  @Matches(ENGLISH_REGEX, { message: 'enName must contain only English letters' })
  enName: string;

  @IsNotEmpty()
  @IsString()
  @Matches(ARABIC_REGEX, { message: 'arName must contain only Arabic letters' })
  arName: string;

  @IsOptional()
  @IsString()
  image?: string;

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
  @Matches(ENGLISH_REGEX, { message: 'enName must contain only English letters' })
  enName?: string;

  @IsOptional()
  @IsString()
  @Matches(ARABIC_REGEX, { message: 'arName must contain only Arabic letters' })
  arName?: string;

  @IsOptional()
  @IsString()
  image?: string;

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