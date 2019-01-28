import { Module } from '@nestjs/common';
import { UsersService } from './modules/Users/Services/users.service';
import { UsersController } from './modules/Users/users.controller';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
