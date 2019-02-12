import { Injectable, HttpException, Inject } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateUserDTO } from '../DTO/create-users.dto'

@Injectable()
export class UsersService {
  private name: string;
  private newName: string;

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

  constructor(@Inject('nameToken') Name, @Inject('NameService') newNameService) {
    this.name = Name;
    this.newName = newNameService.newName();
  }

  getAllUsers () {
    this.users[0]._name = this.name;
    this.users[1]._name = this.newName;
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
