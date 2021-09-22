import { Controller, Post, Get, Request, UseGuards, Body } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthenticatedGuard } from './authenticated.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { User } from 'models/interfaces/User'

@Controller('auth')
export class AuthController {
    constructor(private readonly userService: UsersService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req): Promise<User> {
        return await this.userService.findById(req.user._id);
    }

    @UseGuards(AuthenticatedGuard)
    @Get('me')
    async getProfileInfo(@Request() req): Promise<User> {
        return await this.userService.findById(req.user._doc._id);
    }

    @Post('register')
    async registerUser(@Body() params): Promise<User> {
        return await this.userService.createUser(
            params.firstName, params.lastName, params.email, params.password
        )
    }
}
