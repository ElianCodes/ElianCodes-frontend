import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CertificationsController } from './certifications.controller';
import { CertificationsService } from './certifications.service';
import { CertificationSchema } from 'models/schemas/Certification';
@Module({
  imports: [MongooseModule.forFeature([{name: "Certification", schema: CertificationSchema}])],
  controllers: [CertificationsController],
  providers: [CertificationsService],
})
export class CertificationsModule {}
