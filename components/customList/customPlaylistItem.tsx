import {FunctionComponent} from 'react'
import {IPlaylist} from '@/models/IPlaylist'
import {StyleSheet, Text, View} from 'react-native'
import {FontAwesome5} from '@expo/vector-icons'
import {deletePlaylist} from '@/api/playlist'

interface CustomPlaylistItemProps extends IPlaylist {
  index: number
}

const CustomPlaylistItem: FunctionComponent<CustomPlaylistItemProps> = ({id, title, description, index}) => {

  return (
    <>
      <View>
        <View key={index}>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <FontAwesome5 style={styles.icon} name={'times'} size={20} onPress={() => deletePlaylist(id)} />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  icon: {
    textAlign: 'right',
    marginRight: 'auto',
    marginLeft: 'auto',
    verticalAlign: 'middle',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    fontStyle: 'italic',
  },
  textNoPlaylists: {
    textAlign: 'center',
    margin: 10,
  },
})

export default CustomPlaylistItem