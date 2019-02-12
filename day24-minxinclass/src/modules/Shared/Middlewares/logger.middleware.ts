import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  resolve(message: string): MiddlewareFunction {
    return (req, res, next) => {
      console.log(`${message}`)
      console.log('执行middleware...');
      next();
    }
  }
}