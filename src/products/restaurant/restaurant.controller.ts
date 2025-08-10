import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RestaurantProductsService } from './restaurant.service';
import { CreateRestaurantProductDto, UpdateRestaurantProductDto } from './dto/restaurant.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';

@Controller('restaurant-products')
@UseGuards(AuthGuard('jwt'))
export class RestaurantProductsController {
    constructor(private readonly restaurantProductsService: RestaurantProductsService) { }

    @Get(":page")
    getProducts(
        @Param('page') page: number,
        @Query('id') id?: number,
        @Query('enName') enName?: string,
        @Query('arName') arName?: string,
        @Query('minPrice') minPrice?: number,
        @Query('maxPrice') maxPrice?: number,
        @Query('minPoints') minPoints?: number,
        @Query('maxPoints') maxPoints?: number,
    ) {
        return this.restaurantProductsService.getProducts(Number(page), {
            id: id ? Number(id) : undefined,
            enName,
            arName,
            minPrice: minPrice ? Number(minPrice) : undefined,
            maxPrice: maxPrice ? Number(maxPrice) : undefined,
            minPoints: minPoints ? Number(minPoints) : undefined,
            maxPoints: maxPoints ? Number(maxPoints) : undefined,
        });
    }

    @Post()
    @UseInterceptors(FileInterceptor('image', { storage: multer.memoryStorage() }))
    addProduct(
        @Req() req,
        @Body() data: CreateRestaurantProductDto,
        @UploadedFile() file?: Express.Multer.File,
    ) {
        return this.restaurantProductsService.addProduct(req.user.id, data, file);
    }

    @Patch(':id')
    @UseInterceptors(FileInterceptor('image', { storage: multer.memoryStorage() }))
    updateProduct(
        @Req() req,
        @Param('id') id: number,
        @Body() data: UpdateRestaurantProductDto,
        @UploadedFile() file?: Express.Multer.File,
    ) {
        return this.restaurantProductsService.updateProduct(
            req.user.id,
            Number(id),
            data,
            file,
        );
    }

    @Delete(':id')
    deleteProduct(@Req() req, @Param('id') id: number) {
        return this.restaurantProductsService.deleteProduct(req.user.id, Number(id));
    }
}