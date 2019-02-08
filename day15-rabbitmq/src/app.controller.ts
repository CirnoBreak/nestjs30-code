import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, ClientProxy, Client, Transport } from '@nestjs/microservices';
import { Observable, of } from 'rxjs';
import { ClientRMQ } from 'nestjs-rmq';
// import { ClientRMQ } from 'nestjs-rmq';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  client: ClientRMQ;

  @MessagePattern({ cmd: 'sayHi' })
  sayHi(data: string): Observable<string> {
    return of("Hi,I'm MicroService.");
  }

  @MessagePattern({ cmd: 'amqp' })
  useRabbitMQ(data: string): Observable<string> {
    return of(data);
  }

  @Get('rabbitMQ')
  callRabbitMQ(): Observable<string> {
    const pattern = {
      cmd: 'amqp'
    };

    const data = 'use RabbitMQ';
    this.client = new ClientRMQ({
      urls: ['amqp://ixtpomaj:t1EdwWivTGtzf9XVu40ZSvNh2gSMy6BQ@mustang.rmq.cloudamqp.com/ixtpomaj'],
      queue: 'amqptest'
    });
    console.log('oka')
    return this.client.send<string, string>(pattern, data);
  }
}
