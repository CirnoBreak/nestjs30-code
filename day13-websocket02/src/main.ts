import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setBaseViewsDir(path.join(__dirname, 'views'))
  app.setViewEngine('ejs');
  app.use(session({
    secret: 'nestjs session',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false
    }
  }));
  await app.listen(3000);
}
bootstrap();
