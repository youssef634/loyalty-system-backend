import { 
  Body, 
  Controller, 
  Delete, 
  Get, 
  Param, 
  ParseIntPipe, 
  Post, 
  Put, 
  Query, 
  Request, 
  UseGuards
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';
import { CategoryType } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('categories')
@UseGuards(AuthGuard('jwt'))
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Request() req, @Body() dto: CreateCategoryDto) {
    return this.categoriesService.create(req.user.id , req.user.enName , dto);
  }

  @Post('cafe')
  createCafe(@Request() req, @Body() dto: Omit<CreateCategoryDto, 'type'>) {
    return this.categoriesService.createCafe(req.user.id , req.user.enName, dto);
  }

  @Post('restaurant')
  createRestaurant(@Request() req, @Body() dto: Omit<CreateCategoryDto, 'type'>) {
    return this.categoriesService.createRestaurant(req.user.id , req.user.enName, dto);
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
  update(
    @Request() req, 
    @Param('id', ParseIntPipe) id: number, 
    @Body() dto: UpdateCategoryDto
  ) {
    return this.categoriesService.update(req.user.id , req.user.enName, id, dto);
  }

  @Delete(':id')
  remove(@Request() req, @Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.remove(req.user.id , req.user.enName, id);
  }
}
