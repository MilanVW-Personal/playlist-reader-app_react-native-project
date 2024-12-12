import {FunctionComponent, Suspense} from 'react'
import {Text, View} from 'react-native'
import CustomPlaylist from '@/components/customList/CustomPlaylist'
import {auth} from '@/api/firebaseConfig'

interface StartProps {}

const Start: FunctionComponent<StartProps> = () => {
  const currentUser = auth.currentUser

  return (
    <View>
      {currentUser == null ? (
        <Text style={{textAlign: 'center'}}>You must be logged in to create playlists</Text>
      ) : (
          <CustomPlaylist/>
      )}
    </View>
  )
}

export default Start