import { IArtist } from "./IArtist"

/* In deze interface staan alle gegevens die ik van de tracks wil bijhouden */
export interface ITrack {
    id: string
    title: string
    artists: IArtist[]
    duration: number
    imageUrl: string
    popularity: number
    explicit: boolean
    currentPosition: number
    webURL: string
}