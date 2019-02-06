import { Controller, Get, Request, Response, Next, UseGuards, Post } from '@nestjs/common';
import { Roles } from '../Shared/Decorators/roles.decorator';
import { WebSocketRolesGuard } from '../Shared/Guard/websocket.roles.guard';
import { RolesGuard } from '../Shared/Guard/roles.guard';

@Controller()
@UseGuards(RolesGuard)
export class ChatController {
  constructor() {}

  @Get('chat')
  async chat(@Request() req, @Response() res, @Next() next) {
    res.render('./Chat/chat', {
      title: '聊天室'
    });
  }

  @Get('toAddInChatRoom')
  async toAddInChatRoom(@Request() req, @Response() res, @Next() next) {
    res.render('./Chat/toAddInChatRoom', {
      title: '加入聊天室'
    });
  }

  @Post('addInChatRoom')
  async addInChatRoom(@Request() req, @Response() res, @Next() next) {
    let tmpAccount: string = req.body.Account;
    req.session.user = {};
    req.session.user.account = tmpAccount;
    if (tmpAccount) {
      req.session.user.roles = ["general"];
      res.cookie('name', `${tmpAccount}`);
    }
    res.redirect('/chatRoom');
  }

  @Get('chatRoom')
  @Roles('general')
  async chatRoom(@Request() req, @Response() res, @Next() next) {
    res.render('./Chat/chatRoom', {
      title: '聊天室'
    });
  }
}