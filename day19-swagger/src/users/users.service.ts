import { Injectable, Inject, Body } from '@nestjs/common';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepository') private readonly usersRepository: typeof User,
  ) {}

  public async findAll(): Promise<User[]> {
    return await this.usersRepository.findAll<User>();
  }

  public async findOne(options: Object): Promise<User | null> {
    return await this.usersRepository.findOne<User>(options);
  }

  public async findById(id: number): Promise<User | null> {
    return await this.usersRepository.findById<User>(id);
  }

  public async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersRepository.create<User>(createUserDto);
  }

  public async update(ID: number, newValue): Promise<User | null> {
    let user = await this.usersRepository.findById<User>(ID);
    if (!user.ID) {
      console.error("user does not exist.");
    }
    user = this._assign(user, newValue);
    return await user.save({ returning: true });
  }

  private _assign(user: CreateUserDto, newValue): User {
    for (const key of Object.keys(user["dataValues"])) {
      if (user[key] !== newValue[key]) {
        user[key] = newValue[key];
      }
    }
    return user as User;
  }

  public async delete(ID: number): Promise<number> {
    return await this.usersRepository.destroy({
      where: {
        ID
      }
    })
  }
}
