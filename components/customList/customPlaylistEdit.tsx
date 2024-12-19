import {FunctionComponent} from 'react'
import {IPlaylist} from '@/models/IPlaylist'
import {StyleSheet, Text, View} from 'react-native'

interface CustomPlaylistDetailProps extends IPlaylist {
  id: string
}

const CustomPlaylistEdit: FunctionComponent<CustomPlaylistDetailProps> = ({
  id,
  title,
  description,
  userId,
}) => {
  return (
    <>
      <View style={styles.card}>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{userId}</Text>
        <Text>{id}</Text>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: 'lightgray',
    borderRadius: 10,
    textAlign: 'left',
    marginTop: '50%',
    marginLeft: 10,
    marginRight: 10,
    height: 'auto',
    width: 'auto',
    padding: 5,
  },
})

export default CustomPlaylistEdit