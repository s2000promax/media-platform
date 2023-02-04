import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model, ObjectId} from 'mongoose';
import {CreateTrackDto} from './dto/create-track.dto';
import { Track, TrackDocument } from './shema/track.shema';
import { Comment, CommentDocument } from './shema/comment.shema';


@Injectable()
export class TrackService {

    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
                @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
                ) {};

    async create(dto: CreateTrackDto): Promise<Track> {
        const track = await this.trackModel.create({ ...dto, listens: 0 })
        return track;
    }

    async getAll(): Promise<Track[]> {
        const tracks = await this.trackModel.find();
        return tracks;
    }

    async getOne(id: ObjectId): Promise<Track | null> {
        const track = await this.trackModel.findById(id);
        return track;
    }

    async delete(id: ObjectId): Promise<Track | null> {
        const track = await this.trackModel.findByIdAndDelete(id);
        return track;
    }
}
