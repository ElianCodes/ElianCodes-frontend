import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'models/interfaces/User';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @Get()
    GetAllUsers(): Promise<User[]> {
        return this.userService.findAll()
    }
}
