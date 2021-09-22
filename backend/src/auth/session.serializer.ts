import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { User } from 'models/interfaces/User'

@Injectable()
export class SessionSerializer extends PassportSerializer {
    serializeUser(user: User, done: (err: Error, user: User) => void): any {
        const { password, ...rest } = user
        const serialized: any = rest;
        done(null, serialized)
    }
    deserializeUser(payload: any, done: (err: Error, payload: any) => void): any {
        done(null, payload)
    }
}