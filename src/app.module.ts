import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

dotenv.config();

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot(`mongodb+srv://${process.env.USER_DBUSER}:${process.env.USER_DBPASS}@cluster0.olhlszx.mongodb.net/${process.env.USER_DBNAME}?retryWrites=true&w=majority`),
    TrackModule,
    FileModule,
  ]
})
export class AppModule {}
