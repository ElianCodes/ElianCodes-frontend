import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session'
import * as passport from 'passport'
require('dotenv').config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: process.env.AUTH_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 }
    })
  )

  app.use(passport.initialize())
  app.use(passport.session())
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
