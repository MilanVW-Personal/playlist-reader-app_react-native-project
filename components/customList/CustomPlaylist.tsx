import {FunctionComponent, useEffect, useState} from 'react'
import {Button, Text, View} from 'react-native'
import {useRouter} from 'expo-router'
import {getPlaylistsFromUser} from '@/api/playlist'
import {auth} from '@/api/firebaseConfig'
import CustomPlaylistItem from '@/components/customList/customPlaylistItem'
import {IPlaylist} from '@/models/IPlaylist'

const CustomPlaylist: FunctionComponent = () => {
  const router = useRouter()

  const [userPlaylists, setUserPlaylists] = useState<IPlaylist[]>([])

  useEffect(() => {
    const getUserPlaylists = async () => {
      const currentUserId = auth.currentUser?.uid as string
      const playlists = await getPlaylistsFromUser(currentUserId)
      setUserPlaylists(playlists)
    }

    getUserPlaylists()
  }, [])
  return (
    <>
      <View>
        {!(userPlaylists.length <= 0) ? (
          userPlaylists.map((pl, i) => {
            return <CustomPlaylistItem key={i} index={i} {...pl} />
          })
        ) : (
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                margin: 5,
                textAlign: 'center',
              }}>
              No playlists
            </Text>
            <Button title={'Create playlist'} onPress={() => router.push('/customList/create')} />
          </View>
        )}
      </View>
    </>
  )
}

export default CustomPlaylist