import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './Auth/auth.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, AuthModule]
})
export class ApplicationModule {}
