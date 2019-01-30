import { Module, UseFilters } from '@nestjs/common';
import { UsersController } from './modules/Users/users.controller';
import { UsersModule } from './modules/Users/users.module';
import { LoggerMiddleware } from './modules/Shared/Middlewares/logger.middleware';
import { NestModule, MiddlewareConsumer } from '@nestjs/common/interfaces';
import { ProductsController } from './modules/Products/products.controller';
import { SimpleMiddleware } from './modules/Shared/Middlewares/simple.middleware';
import { HttpExceptionFilter } from './modules/Shared/ExceptionFilters/http-exception.filter';

@Module({
  imports: [UsersModule]
})
@UseFilters(new HttpExceptionFilter())
// NestModule本身是一个Interface，要implements
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    // forRoute允许传入多个参数
    consumer.apply(LoggerMiddleware, SimpleMiddleware)
      .with('来自根模块的参数')
      .forRoutes(
        UsersController,
        ProductsController
      )
  }
}
