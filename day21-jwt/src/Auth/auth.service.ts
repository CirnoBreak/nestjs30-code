import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  public async createToken(id: number) {
    const expiresIn = 3600;
    const token = jwt.sign({ id }, 'hehe', { expiresIn });
    return {
      expires_in: expiresIn,
      token
    }
  }

  public async validateUser(payload: object): Promise<boolean> {
    let queryCondition = {
      where: {
        ID: payload['ID']
      }
    };
    const user = await this.usersService.findOne(queryCondition);
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}