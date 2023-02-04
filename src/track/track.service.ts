import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateTrackDto } from './dto/create-track.dto';
import { Track, TrackDocument } from './shema/track.shema';
import { Comment, CommentDocument } from './shema/comment.shema';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FileService, FileType } from '../file/file.service';


@Injectable()
export class TrackService {

    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
                @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
                private fileService: FileService,
                ) {};

    async create(dto: CreateTrackDto, picture: Express.Multer.File, audio: Express.Multer.File): Promise<Track> {
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
        const track = await this.trackModel.create({ ...dto, listens: 0, audio: audioPath, picture: picturePath })

        return track;
    }

    async getAll(count: number = 10, offset: number = 0): Promise<Track[]> {
        const tracks = await this.trackModel.find().skip(offset).limit(count);
        return tracks;
    }

    async getOne(id: ObjectId): Promise<Track | null> {
        const track = await this.trackModel.findById(id).populate('comments');
        return track;
    }

    async delete(id: ObjectId): Promise<Track | null> {
        const track = await this.trackModel.findByIdAndDelete(id);
        return track;
    }

    async addComment(dto: CreateCommentDto): Promise<Comment> {
        const track = await this.trackModel.findById(dto.trackId);
        const comment = await  this.commentModel.create({ ...dto });
        if (!!track && !!comment) {
            // @ts-ignore
            track.comments.push(comment._id);
            await track.save();
        }

        return comment;
    }

  async listen(id: ObjectId) {
        const track = await this.trackModel.findById(id);

        if (!!track) {
            track.listens += 1;
            track.save();
        }
  }
}
