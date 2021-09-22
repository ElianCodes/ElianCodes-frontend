import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from 'models/interfaces/User'

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    async validateUser(email: string, password: string): Promise<User> {
        const user: User = await this.usersService.findOne(email)
        if (user && user.password === password) {
            return user;
        }
        return null;
    }
}
