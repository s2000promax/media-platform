import {Module} from '@nestjs/common';
import {TrackController} from './track.controller';
import {TrackService} from './track.service';
import {MongooseModule} from '@nestjs/mongoose';
import { Track, TrackSchema } from './shema/track.shema';
import { Comment, CommentSchema } from './shema/comment.shema';


@Module({
  imports: [
    MongooseModule.forFeature([{name: Track.name, schema: TrackSchema}]),
    MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}]),
  ],
  controllers: [TrackController],
  providers: [TrackService]
})
export class TrackModule {}