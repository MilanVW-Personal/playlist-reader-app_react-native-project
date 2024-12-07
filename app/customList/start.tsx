import {FunctionComponent} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import CustomPlaylist from '@/components/customList/CustomPlaylist'

interface StartProps {}

const Start: FunctionComponent<StartProps> = () => {
  const loggedIn = true

  return (
    <View>
      {
        loggedIn ?  <CustomPlaylist /> : <Text style={{textAlign: "center"}}>You must be logged in to create playlists</Text>
      }

    </View>
  )
}

export default Start