import {FunctionComponent} from 'react'
import {View} from 'react-native'
import SongList from '@/components/playlist/SongList'

const PlaylistPage: FunctionComponent = () => {
  return (
    <View>
      <SongList />
    </View>
  )
}

export default PlaylistPage