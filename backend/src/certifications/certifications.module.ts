import { Module } from '@nestjs/common';
import { CertificationsController } from './certifications.controller';
import { CertificationsService } from './certifications.service';

@Module({
  imports: [],
  controllers: [CertificationsController],
  providers: [CertificationsService],
})
export class CertificationsModule {}
