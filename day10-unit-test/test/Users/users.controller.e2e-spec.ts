import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { UsersModule } from '../../src/modules/Users/users.module';
import { UsersService } from '../../src/modules/Users/Services/users.service';

describe('Users', () => {
  let app: INestApplication;
  const usersService = {
    getAllUsers: () => [
      { "_id": 1, "_name": "Michael", "_age": 25 },
      { "_id": 2, "_name": "Mary", "_age": 27 }
    ]
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      modules: [UsersModule]
    })
      .overrideProvider(usersService)
      .useValue(usersService)
      .compile();
    app = module.createNestApplication();
    await app.init();
  });

  it('/GET users', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect(usersService.getAllUsers())
  })
})
