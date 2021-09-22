import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
    imports: [UsersModule, PassportModule.register({ session: true })],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, SessionSerializer]
})
export class AuthModule {}
