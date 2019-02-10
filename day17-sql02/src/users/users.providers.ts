import { User } from './users.entity';

export const usersProviders = [
  {
    provide: 'UsersRepository',
    useValue: User,
  },
];
