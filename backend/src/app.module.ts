import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ProjectsController } from './projects/projects.controller';
import { HealthController } from './health/health.controller';
import { CertificationsController } from './certifications/certifications.controller';

@Module({
  imports: [],//MongooseModule.forRoot(connectionString)],
  controllers: [AppController, ProjectsController, HealthController, CertificationsController],
  providers: [AppService],
})
export class AppModule {}
