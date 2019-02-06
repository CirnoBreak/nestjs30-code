import { WebSocketGateway, SubscribeMessage, WsResponse, WebSocketServer, WsException } from '@nestjs/websockets';
import { NestGateway } from '@nestjs/websockets/interfaces/nest-gateway.interface';
import Socket = SocketIO.Socket;
import { Roles } from '../Shared/Decorators/roles.decorator';

// websocket 监听81端口
@WebSocketGateway(81, { namespace: 'messages' })
export class ChatGateway implements NestGateway {
  socket: Socket;
  constructor() {}

  afterInit(server) {}

  handleConnection(socket) {
  }

  handleDisconnect(socket) {}

  // 订阅事件的名称
  @SubscribeMessage('pushMessage')
  @Roles('general')
  AddMessage(sender, message: string) {
    let tmpMessage: string = `${message}`;
    sender.emit('newMessage', tmpMessage);
    sender.broadcast.emit('newMessage', tmpMessage);
  }
}