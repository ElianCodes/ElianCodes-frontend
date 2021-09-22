import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CertificationsController } from './certifications.controller';
import { CertificationsService } from './certifications.service';

@Module({
  imports: [],//MongooseModule.forRoot(connectionString)],
  controllers: [CertificationsController],
  providers: [CertificationsService],
})
export class CertificationsModule {}
