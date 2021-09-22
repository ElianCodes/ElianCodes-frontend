import { Body, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { User } from 'models/interfaces/User'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super()
    }

    async validate(username: string, password: string): Promise<User> {
        const user = await this.authService.validateUser(username, password)
        if(!user) {
            throw new UnauthorizedException()
        }
        return user
    }
}