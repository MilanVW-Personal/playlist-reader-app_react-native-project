import {FunctionComponent} from 'react'
import {Button, Text, View} from 'react-native'
import {useRouter} from 'expo-router'

const CustomPlaylist: FunctionComponent = () => {
  const router = useRouter()

  return (
    <>
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
        </View>
      <Button title={'Create new playlist'} onPress={() => router.push('/customList/create')} />
    </>
  )
}

export default CustomPlaylist