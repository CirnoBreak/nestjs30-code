import { User } from '../users.entity';

export interface IUsersService {
  findAll(): Promise<Array<User>>;
  findById(ID: number): Promise<User | null>;
  findOne(options: Object): Promise<User | null>;
}