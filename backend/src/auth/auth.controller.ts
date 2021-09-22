import { Controller, Post, Get, Request, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from './authenticated.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    
    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req): string {
        return req.user
    }

    @UseGuards(AuthenticatedGuard)
    @Get('me')
    getProfileInfo(): string {
        return 'You probably are Elian! or aren\'t you?'
    }
}
