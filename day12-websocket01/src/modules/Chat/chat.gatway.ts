import { WebSocketGateway, SubscribeMessage, WsResponse, WebSocketServer, WsException } from '@nestjs/websockets';
import { NestGateway } from '@nestjs/websockets/interfaces/nest-gateway.interface';
import Socket = SocketIO.Socket;

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
  AddMessage(sender, message: string) {
    sender.emit('newMessage', message);
    sender.broadcast.emit('newMessage', message);
  }
}