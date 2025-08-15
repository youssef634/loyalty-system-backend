import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import { AuthGuard } from '@nestjs/passport';
import { CafeProductsService } from './cafe.service';
import { CreateCafeProductDto, UpdateCafeProductDto } from './dto/cafe.dto';

@Controller('cafe-products')
@UseGuards(AuthGuard('jwt'))
export class CafeProductsController {
    constructor(private readonly service: CafeProductsService) { }

    @Get(":page")
    getProducts(
        @Param("page") page: number,
        @Query('limit') limit?: number,
        @Query('id') id?: number,
        @Query('enName') enName?: string,
        @Query('arName') arName?: string,
        @Query('minPoints') minPoints?: number,
        @Query('maxPoints') maxPoints?: number,
    ) {
        return this.service.getProducts(page, {limit, id, enName, arName, minPoints, maxPoints });
    }

    @Post()
    @UseInterceptors(FileInterceptor('image', { storage: multer.memoryStorage() }))
    addProduct(
        @Req() req,
        @Body() data: CreateCafeProductDto,
        @UploadedFile() file?: Express.Multer.File,
    ) {
        return this.service.addProduct(req.user.id, data, file);
    }

    @Patch(':id')
    @UseInterceptors(FileInterceptor('image', { storage: multer.memoryStorage() }))
    updateProduct(
        @Req() req,
        @Param('id') id: number,
        @Body() data: UpdateCafeProductDto,
        @UploadedFile() file?: Express.Multer.File,
    ) {
        return this.service.updateProduct(
            req.user.id,
            Number(id),
            data,
            file,
        );
    }

    @Delete(':id')
    deleteProduct(@Req() req, @Param('id') id: string) {
        return this.service.deleteProduct(req.user.id, Number(id));
    }
}