import { Body, Controller, Delete, Get, Headers, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductsService) {

    }

    @Get()
    // @Redirect('https://www.google.com',301)
    getProducts(@Headers('token') token: string): Promise<Product[]> {
        return this.productService.getAll()
    }

    @Post('category')
    getProductsByCategory(@Headers('token') token: string, @Body() { category }) {
        category = category.replace('-tab', '')
        console.log(category)
        if (category == 'all') return this.productService.getAll()
        return this.productService.getByCategory(category)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createOne(@Body() createProductDto: CreateProductDto, @Headers('token') token: string) {
        if (token == '123456') {
            return this.productService.create(createProductDto)
        } else {
            return { error: 'Not Variable Token' }
        }

    }

    @Get(':id')
    getById(@Param('id') id): Promise<Product> {
        return this.productService.getById(id)
    }

    @Delete(':id')
    removeByID(@Param('id') id: string): Promise<Product> {
        return this.productService.removeByID(id)
    }

    @Put(':id')
    updateByID(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): Promise<Product> {
        return this.productService.updateByID(id, updateProductDto)
    }
}
