import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/')
  getAll() {
    return this.productsService.getAllProducts();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const product = await this.productsService.getProductById(id);
    if (!product)
      throw new NotFoundException(`Product with ID: ${id} not found...`);
    return product;
  }
}
