import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Track } from '../../track/shema/track.shema';
export type AlbumDocument = HydratedDocument<Album>;
export declare class Album {
    name: string;
    author: string;
    picture: string;
    tracks: Track[];
}
export declare const AlbumSchema: mongoose.Schema<Album, mongoose.Model<Album, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Album>;
