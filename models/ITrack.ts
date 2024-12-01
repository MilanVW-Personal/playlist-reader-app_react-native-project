import { IArtist } from "./IArtist"

export interface ITrack {
    title: string
    artists: IArtist[]
    duration: number
}