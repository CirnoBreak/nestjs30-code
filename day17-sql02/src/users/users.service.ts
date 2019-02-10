import { Injectable, Inject } from '@nestjs/common';
import { User } from './users.entity';
import { IUsersService } from './interfaces';

@Injectable()
export class UsersService implements IUsersService {
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
}
