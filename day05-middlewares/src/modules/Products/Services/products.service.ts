import { Injectable, HttpException } from '@nestjs/common';
import { Observable, of } from 'rxjs'
import { CreateProductDTO } from '../DTO/create-products.dto';

@Injectable()
export class ProductsService {
  // 假数据
  private products = [
    {
      "_id": 1,
      "_name": "Watch",
      "_price": 1000
    },
    {
      "_id": 2,
      "_name": "Phone",
      "_price": 2333
    }
  ];

  getAllProducts () {
    return Promise.resolve(this.products);
  }

  getProduct(id: Number) {
    const product = this.products.find((product) => {
      return product._id === id;
    });

    if (!product) {
      throw new HttpException("product not found", 404);
    }

    return Promise.resolve(product);
  }

  addProduct(product: CreateProductDTO): Observable<object[]> {
    this.products.push(product);
    return of(this.products);
  }
}