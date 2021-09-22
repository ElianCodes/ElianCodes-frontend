import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
@Module({
  imports: [],//MongooseModule.forRoot(connectionString)],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
