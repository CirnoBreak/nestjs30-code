import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ServerRMQ } from 'nestjs-rmq';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    strategy: new ServerRMQ({
      urls: ['amqp://ixtpomaj:t1EdwWivTGtzf9XVu40ZSvNh2gSMy6BQ@mustang.rmq.cloudamqp.com/ixtpomaj'], 
      queue: 'amqptest'}
    )
  });

  await app.startAllMicroservices();
  await app.listen(3000)
    .then(() => {
      console.log(`MicroService is starting.`);
    })
    .catch((error) => {
      console.error(`Something wrong happened`, error);
    });
}
bootstrap();
