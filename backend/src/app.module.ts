import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ProjectsModule } from './projects/projects.module';
import { CertificationsModule } from './certifications/certifications.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ProjectsModule, CertificationsModule, ConfigModule.forRoot({ isGlobal: true }), MongooseModule.forRoot(process.env.DB_STRING)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
