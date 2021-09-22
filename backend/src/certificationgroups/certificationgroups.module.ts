import { Module } from '@nestjs/common';
import { CertificationgroupsService } from './certificationgroups.service';
import { CertificationgroupsController } from './certificationgroups.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CertificationGroupsSchema } from 'models/schemas/CertificationGroup';

@Module({
  imports: [MongooseModule.forFeature([{name: "CertificationGroups", schema: CertificationGroupsSchema}])],
  providers: [CertificationgroupsService],
  controllers: [CertificationgroupsController]
})
export class CertificationgroupsModule {}
