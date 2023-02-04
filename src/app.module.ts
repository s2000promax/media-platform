import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${process.env.USER_DBUSER}:${process.env.USER_DBPASS}@cluster0.olhlszx.mongodb.net/${process.env.USER_DBNAME}?retryWrites=true&w=majority`),
    TrackModule,
  ]
})
export class AppModule {}
