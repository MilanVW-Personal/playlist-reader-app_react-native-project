import {FunctionComponent, useEffect, useState} from 'react'
import {useLocalSearchParams} from 'expo-router'
import CustomPlaylistEdit from '@/components/customList/customPlaylistEdit'
import {getPlaylistById} from '@/api/playlist'

const PlaylistDetails: FunctionComponent = () => {
  const {playlistId} = useLocalSearchParams<{playlistId: string}>()
  const [playlist, setPlaylist] = useState<IPlaylist>({})

  useEffect(() => {
    const getPlaylist = async () => {
      const playlistFromId = await getPlaylistById(playlistId)
      setPlaylist(playlistFromId)
    }

    console.log(playlistId)
    getPlaylist()
  }, [playlistId])

  return (
    <>
      <CustomPlaylistEdit id={playlistId} {...playlist}/>
    </>
  )}

export default PlaylistDetails