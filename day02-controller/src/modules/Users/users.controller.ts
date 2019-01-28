import { Controller, Get, Post, Request, Response, Param, Next, HttpStatus, Body } from '@nestjs/common';
import { CreateUserDTO } from './DTO/create-users.dto';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers(@Request() req, @Response() res, @Next() next) {
    const users = [{
      "Name": "Michael",
      "Age": 25
    }];
    return res.status(HttpStatus.OK).json(users);
  }

  @Get('/:id')
  getUser(@Param() params) {
    return {
      "getUser": params.id
    }
  }

  @Post()
  addUser(@Body() createUserDTO: CreateUserDTO) {
    console.log(`姓名: ${createUserDTO._name} 年龄: ${createUserDTO._age}`);
  }
}
