import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Post('create')
    async createNewUser(@Body() createUsersDto: CreateUsersDto) {
        console.log(createUsersDto)
        this.usersService.createUser(createUsersDto)
    }

    @Post()
    async findUser(@Body() createUsersDto: CreateUsersDto) {
        return this.usersService.findOneUser(createUsersDto.username)
    }
}
