import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    //agregar este import
    TypeOrmModule.forFeature([User])
  ],
  exports: [TypeOrmModule]
})
export class UsersModule {}
