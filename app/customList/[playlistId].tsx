import {FunctionComponent, Suspense, useEffect, useState} from 'react'
import {useLocalSearchParams} from 'expo-router'
import CustomPlaylistEdit from '@/components/customList/customPlaylistEdit'
import {getPlaylistById} from '@/api/playlist'
import {IPlaylist} from '@/models/IPlaylist'
import {Text} from 'react-native'

const PlaylistDetails: FunctionComponent = () => {
  const {playlistId} = useLocalSearchParams<{playlistId: string}>()
  const [playlist, setPlaylist] = useState<IPlaylist>()

  useEffect(() => {
    const getPlaylist = async () => {
      const playlistFromId = await getPlaylistById(playlistId)
      setPlaylist(playlistFromId)
      console.log(playlistFromId)
    }

    getPlaylist()
  }, [playlistId])

  return (
    <>
        {playlist ? (
          <CustomPlaylistEdit id={playlistId} titlePlaylist={playlist.title} descriptionPlaylist={playlist?.description} songs={playlist?.songs}/>
        ) :
          <Text>Loading...</Text>}
    </>
  )}

export default PlaylistDetails