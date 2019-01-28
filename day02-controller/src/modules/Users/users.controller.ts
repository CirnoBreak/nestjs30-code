import { Controller, Get, Post, Request, Response, Param, Next, HttpStatus, Body } from '@nestjs/common';
import { CreateUserDTO } from './DTO/create-users.dto';

@Controller('users')
export class UsersController {
  @Get()
  // 使用Express的参数
  getAllUsers(@Request() req, @Response() res, @Next() next) {
    // users假数据
    const users = [{
      "Name": "Michael",
      "Age": 25
    }];
    // 多钟HttpStatus可用
    return res.status(HttpStatus.OK).json(users);
  }

  @Get('/:id')
  // 使用Express的参数
  getUser(@Param() params) {
    return {
      "getUser": params.id
    }
  }

  @Post()
  addUser(@Body() createUserDTO: CreateUserDTO) {
    // 显示POST请求过来的request body
    console.log(`姓名: ${createUserDTO._name} 年龄: ${createUserDTO._age}`);
  }
}
