import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './Services/users.service';
import { ProductsModule } from '../Products/products.module';

@Module({
  // 传入UserController
  controllers: [UsersController],
  // 传入UserService
  providers: [UsersService],
  imports: [ProductsModule]
})
export class UsersModule {}