import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from 'models/interfaces/User'
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    async validateUser(email: string, password: string): Promise<User> {
        const user: User = await this.usersService.findOneOnEmail(email)
        if (!user) {
            throw new NotFoundException
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new BadRequestException
        }
        user.password = "";
        return user;
    }
}
