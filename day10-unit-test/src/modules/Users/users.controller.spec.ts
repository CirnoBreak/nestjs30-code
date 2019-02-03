import { UsersController } from './users.controller';
import { UsersService } from './Services/users.service';
import { ProductsService } from '../Products/Services/products.service';
import { Request, Response, Next } from '@nestjs/common';
import { Test } from '@nestjs/testing';

describe('UserController', () => {
  let usersController: UsersController;
  let usersService: UsersService;
  let productService: ProductsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, ProductsService]
    }).compile();
    usersService = module.get<UsersService>(UsersService);
    usersController = module.get<UsersController>(UsersController);
  });

  describe('runTest', () => {
    it('should return an array of users', () => {
      const result = [
        { "_id": 1, "_name": "Michael", "_age": 25 },
        { "_id": 2, "_name": "Mary", "_age": 27 }
      ];

      jest.spyOn(usersService, 'getAllUsers').mockImplementation(() => result);
      usersController.getAllUsers(Request, Response, Next).then((data) => {
        expect(data).toBe(result);
      })
    })
  });
  
});