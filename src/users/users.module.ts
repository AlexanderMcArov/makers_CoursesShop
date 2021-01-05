import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose'
import { Users, UserSchema } from './schemas/users.schema';
import { UsersController } from './users.controller';
@Module({
  providers: [UsersService],
  exports: [UsersService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Users.name, schema: UserSchema
      }
    ])
  ],
  controllers: [UsersController]
})
export class UsersModule { }