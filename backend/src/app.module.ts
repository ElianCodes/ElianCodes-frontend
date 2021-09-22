import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot(connectionString)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
