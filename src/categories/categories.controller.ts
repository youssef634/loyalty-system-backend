import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';
import { CategoryType } from '@prisma/client';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() dto: CreateCategoryDto) {
    return this.categoriesService.create(dto);
  }

  @Post('cafe')
  createCafe(@Body() dto: Omit<CreateCategoryDto, 'type'>) {
    return this.categoriesService.createCafe(dto);
  }

  @Post('restaurant')
  createRestaurant(@Body() dto: Omit<CreateCategoryDto, 'type'>) {
    return this.categoriesService.createRestaurant(dto);
  }

  @Get()
  findAll(@Query('type') type?: CategoryType) {
    return this.categoriesService.findAll(type);
  }

  @Get('cafe')
  getCafeCategories() {
    return this.categoriesService.getCafeCategories();
  }

  @Get('restaurant')
  getRestaurantCategories() {
    return this.categoriesService.getRestaurantCategories();
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateCategoryDto) {
    return this.categoriesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.remove(id);
  }
}