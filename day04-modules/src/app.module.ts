import { Module } from '@nestjs/common';
import { UsersController } from './modules/Users/users.controller';
import { UsersService } from './modules/Users/Services/users.service';
import { UsersModule } from './modules/Users/users.module';
import { ProductsModule } from './modules/Products/products.module';

@Module({
  imports: [UsersModule]
})
export class AppModule {}
