import { Injectable, HttpException } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateUserDTO } from '../DTO/create-users.dto'

@Injectable()
export class UsersService {
  // users假数据
  private users = [
    {
      "_id": 1,
      "_name": "zhangsan",
      "_age": 20
    },
    {
      "_id": 2,
      "_name": "lisi",
      "_age": 21
    }
  ];

  getAllUsers () {
    return Promise.resolve(this.users);
  }

  getUser(id: number) {
    console.log(id)
    const user = this.users.find((user) => {
      return user._id === id;
    });

    if (!user) {
      throw new HttpException("user not found", 404);
    }
    return Promise.resolve(user);
  }

  addUser(user: CreateUserDTO): Observable<object[]> {
    this.users.push(user);
    return of(this.users);
  }
}
