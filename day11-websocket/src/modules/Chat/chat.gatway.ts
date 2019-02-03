import { WebSocketGateway, SubscribeMessage, WsResponse, WebSocketServer, WsException } from '@nestjs/websockets';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'net';

// websocket 监听81端口
@WebSocketGateway(81)
export class ChatGateway {
  @WebSocketServer() Server;

  // 订阅事件的名称
  @SubscribeMessage('wannaChat')
  onEvent(client, message): WsResponse<string> {
    // 要监听的事件
    const event = 'wannaChat';
    // 接受来自client端传过来的信息
    console.log('servers', message);
    // 准备一段回应client端的信息
    const response = `Hi,I'm Chat Server.`;
    /*WsResponse的interface结构
      export interface WsResponse<T> {
        event: string;
        data: T;
      }
    */
    // 直接推向指定的event，data的值是我们要推的信息
    return {
      event,
      data: response
    };
  }
}