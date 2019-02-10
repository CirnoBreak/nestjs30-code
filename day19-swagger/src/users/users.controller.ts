import { Controller, Get, Response, Post, Body, HttpStatus, Param, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiUseTags, ApiImplicitParam, ApiImplicitBody } from '@nestjs/swagger';

@ApiUseTags('users test')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // 查找所有user
  @Get()
  async findAll(@Response() res): Promise<User[]> {
    const users = await this.usersService.findAll();
    return res.status(HttpStatus.OK).json(users);
  }

  // 找到名字为haha的user
  @Get('/find')
  public async findUser(@Response() res) {
    let queryCondition = { where: { name: 'hahah' } };
    const users=  await this.usersService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(users);
  }
  
  // 找到id匹配的user
  @Get('/:id')
  @ApiImplicitParam({ name: 'id' })
  public async getUser(@Response() res, @Param() param) {
    const users = await this.usersService.findById(param.id);
    return res.status(HttpStatus.OK).json(users);
  }

  // 新建一个user
  @Post()
  public async createUser(@Response() res, @Body() createUserDto: CreateUserDto) {
    const users = await this.usersService.create(createUserDto);
    return res.status(HttpStatus.OK).json(users);
  }

  // 修改用户信息
  @Patch('/:ID')
  @ApiImplicitParam({ name: 'ID' })
  @ApiImplicitBody({ name: 'username', description: 'example: {"Name": "test", "Age": 30}', required: true, type: Object })
  public async updateUser(@Param() param, @Response() res, @Body() body) {
    const users = await this.usersService.update(param.ID, body);
    return res.status(HttpStatus.OK).json(users);
  }

  // 删除某个用户
  @Delete('/:ID')
  @ApiImplicitParam({ name: 'ID' })
  public async deleteUser(@Param() param, @Response() res) {
    const users = await this.usersService.delete(param.ID);
    return res.status(HttpStatus.OK).json(users);
  }
}
