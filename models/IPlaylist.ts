import {ITrack} from '@/models/ITrack'

export interface IPlaylist {
  id: string
  title: string;
  description: string;
  userId: string;
  createdAt: Date;
  songs: ITrack[]
}