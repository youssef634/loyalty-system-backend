import { IsNotEmpty, IsOptional, IsString, Matches, IsEnum } from 'class-validator';
import { CategoryType } from '@prisma/client';

export class CreateCategoryDto {
    @IsNotEmpty()
    @IsString()
    @Matches(/^[A-Za-z\s]+$/, { message: 'enName must contain only English letters' })
    enName: string;

    @IsNotEmpty()
    @IsString()
    @Matches(/^[\u0600-\u06FF\s]+$/, { message: 'arName must contain only Arabic letters' })
    arName: string;

    @IsNotEmpty()
    @IsEnum(CategoryType, { message: 'type must be either CAFE or RESTAURANT' })
    type: CategoryType;
}

export class UpdateCategoryDto {
    @IsOptional()
    @IsString()
    @Matches(/^[A-Za-z\s]+$/, { message: 'enName must contain only English letters' })
    enName?: string;

    @IsOptional()
    @IsString()
    @Matches(/^[\u0600-\u06FF\s]+$/, { message: 'arName must contain only Arabic letters' })
    arName?: string;

    @IsOptional()
    @IsEnum(CategoryType, { message: 'type must be either CAFE or RESTAURANT' })
    type?: CategoryType;
}