import { Controller, Get, Response, Post, Body, HttpStatus, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(@Response() res): Promise<User[]> {
    const users = await this.usersService.findAll();
    return res.status(HttpStatus.OK).json(users);
  }

  @Get('/find')
  public async findUser(@Response() res) {
    let queryCondition = { where: { name: 'hahah' } };
    const users=  await this.usersService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(users);
  }

  @Get('/:id')
  public async getUser(@Response() res, @Param() param) {
    const users = await this.usersService.findById(param.id);
    return res.status(HttpStatus.OK).json(users);
  }
}
