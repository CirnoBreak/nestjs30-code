import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { ClientRMQ } from 'nestjs-rmq';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://ixtpomaj:t1EdwWivTGtzf9XVu40ZSvNh2gSMy6BQ@mustang.rmq.cloudamqp.com/ixtpomaj'],
      queue: 'amqltest'
    }
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
