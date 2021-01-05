import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from './schemas/users.schema';
import { CreateUsersDto } from './dto/create-users.dto';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private usersModel: Model<UsersDocument>) { }

    async createUser(user: CreateUsersDto): Promise<Users> {
        const newUser = new this.usersModel(user)
        console.log(this.findOneUser(user.username))
        
        if(this.findOneUser(user.username)) return this.findOneUser(user.username)
        else return newUser.save()
    }

    async findOneUser(user: User): Promise<User | null>{
        return this.usersModel.find({username: user})
    }

    async findOne(username: string): Promise<User | undefined> {
        return undefined
    }
}