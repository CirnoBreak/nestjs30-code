import { ExceptionFilter, Catch, HttpException, ArgumentsHost } from '@nestjs/common';

// Catch装饰器可以传入无数个参数
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();
    const message = 'Exception Log Message';

    // 做log动作
    console.log(`exception status:`, status);
    console.log(`exception message:`, message);

    // 调整response的json内容
    response.status(status).json({
      statusCode: status,
      message: message
    });
  }
}