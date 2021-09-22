import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ProjectsModule } from './projects/projects.module';
import { CertificationsModule } from './certifications/certifications.module';

@Module({
  imports: [ProjectsModule, CertificationsModule],//MongooseModule.forRoot(connectionString)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
