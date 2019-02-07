import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Client, ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { Observable, of } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Client({ transport: Transport.TCP })
  client: ClientProxy;

  @MessagePattern({ cmd: 'sayHi' })
  sayHi(data: string): Observable<string> {
    return of(`Hi, I'm Microservice.`);
  }

  @Get()
  call(): Observable<string> {
    const pattern = {
      cmd: 'sayHi'
    };
    const data = '';
    return this.client.send<string>(pattern, data);
  }
}
