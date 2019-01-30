import { Module, RequestMethod } from '@nestjs/common';
import { UsersController } from './modules/Users/users.controller';
import { UsersService } from './modules/Users/Services/users.service';
import { UsersModule } from './modules/Users/users.module';
import { LoggerMiddleware } from './modules/Shared/Middlewares/logger.middleware';
import { NestModule, MiddlewareConsumer } from '@nestjs/common/interfaces';
import { ProductsController } from './modules/Products/products.controller';
import { SimpleMiddleware } from './modules/Shared/Middlewares/simple.middleware';

@Module({
  imports: [UsersModule]
})
// NestModule本身是一个Interface，要implements
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    // forRoute允许传入多个参数
    consumer.apply(LoggerMiddleware, SimpleMiddleware)
      .with('来自根模块的参数')
      .forRoutes(
        // {
        //   path: '/users',
        //   method: RequestMethod.ALL
        // },
        // {
        //   path: '/products',
        //   method: RequestMethod.ALL
        // }
        UsersController,
        ProductsController
      )
  }
}
