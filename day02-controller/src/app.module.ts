import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersController } from './modules/Users/users.controller';

@Module({
  imports: [],
  controllers: [UsersController],
})
export class AppModule {}
