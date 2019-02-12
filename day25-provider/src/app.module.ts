import { Module } from '@nestjs/common';
import { UsersService } from './modules/Users/Services/users.service';
import { UsersController } from './modules/Users/users.controller';
import { NameService } from './modules/Users/Services/name.service';

// useValue
const nameProvider = {
  provide: 'nameToken',
  useValue: 'Ted'
};

// useClass
const newNameProvider = {
  provide: NameService,
  useClass: NameService
};

// useFactory
const newNameFactory = {
  provide: 'NameService',
  useFactory: () => {
    return new NameService();
  }
};

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, nameProvider, newNameProvider, newNameFactory],
})
export class AppModule {}
