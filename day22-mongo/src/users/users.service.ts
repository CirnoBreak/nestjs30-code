import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { Users } from './interfaces/users.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users') private readonly usersModel: Model<Users>
  ) {}

  public async findAll(): Promise<Users[]> {
    return await this.usersModel.find().exec();
  }

  public async findOne(options: Object): Promise<Users | null> {
    return await this.usersModel.findOne(options).exec();
  }

  public async findById(_id: number): Promise<Users | null> {
    return await this.usersModel.findOne({ _id }).exec();
  }

  public async create(createUsersDto: CreateUserDto): Promise<Users> {
    const createUsers = new this.usersModel(createUsersDto);
    return await createUsers.save();
  }

  public async update(_id: number, newValue): Promise<Users | null> {
    let user = await this.usersModel.findOne({ _id }).exec();
    if (!user._id) {
      console.error("user does not exist.");
    }
    await this.usersModel.updateOne({ _id }, newValue).exec();
    return await this.usersModel.findOne({ _id }).exec();
  }

  public async delete(_id: number): Promise<number> {
    let user = await this.usersModel.findOne({ _id }).exec();
    await this.usersModel.findByIdAndDelete({ _id }).exec();
    if (!user) {
      return 1;
    } else {
      return 0;
    }
  }
}
