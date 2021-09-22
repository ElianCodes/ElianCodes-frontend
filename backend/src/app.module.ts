import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ProjectsModule } from './projects/projects.module';
import { CertificationsModule } from './certifications/certifications.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CertificationgroupsModule } from './certificationgroups/certificationgroups.module';
require('dotenv').config()
@Module({
  imports: [ProjectsModule, CertificationsModule, ConfigModule.forRoot({ isGlobal: true }), MongooseModule.forRoot(process.env.DB_STRING), AuthModule, UsersModule, CertificationgroupsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
