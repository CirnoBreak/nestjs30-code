import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatGateway } from './chat.gatway';

@Module({
  controllers: [ChatController],
  providers: [ChatGateway]
})
export class ChatModule {}