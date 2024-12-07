import {IPlaylist} from '@/models/IPlaylist'
const customPlaylists: IPlaylist[] = []


export const createPlaylist = (title: string, desc: string) => {
  customPlaylists.push({title: title, description: desc})
  console.log(customPlaylists)
}

export const getAllPlaylists = () => {
  return customPlaylists
}

export const deletePlaylist = (index: number) => {
  customPlaylists.splice(index, 1)
  console.log(customPlaylists)
}