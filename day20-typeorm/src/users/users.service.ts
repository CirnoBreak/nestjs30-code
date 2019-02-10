import { Injectable, Body } from '@nestjs/common';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>
  ) {}

  public async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  public async findOne(options: Object): Promise<User | null> {
    return await this.usersRepository.findOne(options);
  }

  public async findById(id: number): Promise<User | null> {
    return await this.usersRepository.findOne(id);
  }

  public async create(users: CreateUserDto): Promise<User> {
    return await this.usersRepository.save(users);
  }

  public async update(ID: number, newValue): Promise<User | null> {
    let user = await this.usersRepository.findOne(ID);
    if (!user.ID) {
      console.error("user does not exist.");
    }
    await this.usersRepository.update(ID, newValue);
    return await this.usersRepository.findOne(ID);
  }

  public async delete(ID: number): Promise<number> {
    await this.usersRepository.delete(ID);
    let user = await this.usersRepository.findOne(ID);
    if (!user) {
      return 1;
    } else {
      return 0;
    }
  }
}
