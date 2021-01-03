import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {

    }

    async getAll(): Promise<Product[]> {
        return this.productModel.find().exec()
    }

    async getById(id: string): Promise<Product> {
        return this.productModel.findById(id)
    }

    async getByCategory(category: string) {
        return this.productModel.find({ category: category})
    }

    async create(product: CreateProductDto): Promise<Product> {
        const newProduct = new this.productModel(product)
        return newProduct.save()
    }

    async removeByID(id: string): Promise<Product> {
        return this.productModel.findByIdAndRemove(id)
    }

    async updateByID(id: string, productDto: UpdateProductDto): Promise<Product> {
        return this.productModel.findByIdAndUpdate(id, productDto)
    }
}
