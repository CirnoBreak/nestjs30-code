import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { Observable, of } from 'rxjs';
import { ClientRMQ } from 'nestjs-rmq';

const clientOpt = {
  urls: ['amqp://ixtpomaj:t1EdwWivTGtzf9XVu40ZSvNh2gSMy6BQ@mustang.rmq.cloudamqp.com/ixtpomaj'],
  queue: 'amqptest'
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  client: ClientRMQ;

  @MessagePattern({ cmd: 'sayHi' })
  sayHi(data: string): Observable<string> {
    return of("Hi,I'm " + data);
  }

  @MessagePattern({ cmd: 'amqp' })
  useRabbitMQ(data: string): Observable<string> {
    return of(data);
  }

  @Get('sayhi')
  callSayHi(): Observable<string> {
    this.client = new ClientRMQ(clientOpt);
    return this.client.send<string>({ cmd: 'sayHi' }, 'test.');
  }

  @Get('rabbitMQ')
  callRabbitMQ(): Observable<string> {
    const pattern = {
      cmd: 'amqp'
    };

    const data = 'use RabbitMQ';
    this.client = new ClientRMQ(clientOpt);
    return this.client.send<string>(pattern, data);
  }
}
