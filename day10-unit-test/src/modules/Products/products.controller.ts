import { Controller, Get, Post, Request, Response, Param, Next, HttpStatus, Body } from '@nestjs/common';
import { CreateProductDTO } from './DTO/create-products.dto';
import { ProductsService } from '../Products/Services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getAllProducts(@Request() req, @Response() res, @Next() next) {
    await this.productsService.getAllProducts()
      .then((products) => {
        res.status(HttpStatus.OK).json(products);
      })
      .catch((error) => {
        console.error(error);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR);
      })
  }

  @Get('/:id')
  async getProduct(@Response() res, @Param('id') id) {
    await this.productsService.getProduct(+id)
      .then((product) => {
        res.status(HttpStatus.OK).json(product);
      })
      .catch((error) => {
        console.error(error);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR);
      })
  }

  @Post()
  async addProduct(@Response() res, @Body() createProductDTO: CreateProductDTO) {
    await this.productsService.addProduct(createProductDTO)
      .subscribe((products) => {
        res.status(HttpStatus.OK).json(products);
      })
  }
}