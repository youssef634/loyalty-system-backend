import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import { AuthGuard } from '@nestjs/passport';
import { CafeProductsService } from './cafe.service';
import { CreateCafeProductDto, UpdateCafeProductDto } from './dto/cafe.dto';
import { Permissions } from '@src/common/permissions.decorator';
import { RolesGuard } from '@src/common/roles.guard';

@Controller('cafe-products')
@UseGuards(AuthGuard('jwt'), RolesGuard)
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
        @Query('category') category?: string,
    ) {
        return this.service.getProducts(Number(page), {
            limit: limit ? Number(limit) : undefined,
            id: id ? Number(id) : undefined,
            enName,
            arName,
            minPoints: minPoints ? Number(minPoints) : undefined,
            maxPoints: maxPoints ? Number(maxPoints) : undefined,
            category,
        });
    }

    @Post()
    @Permissions('products')
    @UseInterceptors(FileInterceptor('image', { storage: multer.memoryStorage() }))
    addProduct(
        @Req() req,
        @Body() data: CreateCafeProductDto,
        @UploadedFile() file?: Express.Multer.File,
    ) {
        return this.service.addProduct(req.user.id, data, file);
    }

    @Patch(':id')
    @Permissions('products')
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
    @Permissions('products')
    deleteProduct(@Req() req, @Param('id') id: string) {
        return this.service.deleteProduct(req.user.id, Number(id));
    }
}