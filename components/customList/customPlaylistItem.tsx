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
      <View key={index} style={styles.itemCard}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <FontAwesome5 style={styles.iconDelete} name={'times'} size={20} onPress={() => deletePlaylist(id)} />
        {/*<View style={styles.buttonCollection}>*/}
        {/*  <FontAwesome5*/}
        {/*    style={styles.iconAction}*/}
        {/*    name={'music'}*/}
        {/*    size={20}*/}
        {/*    onPress={() => {}}*/}
        {/*  />*/}
        {/*  <FontAwesome5*/}
        {/*    style={styles.iconAction}*/}
        {/*    name={'pen'}*/}
        {/*    size={20}*/}
        {/*    onPress={() => {}}*/}
        {/*  />*/}
        {/*</View>*/}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  iconDelete: {
    textAlign: 'right',
    marginRight: 'auto',
    marginLeft: 'auto',
    verticalAlign: 'middle',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  description: {
    fontSize: 15,
    fontStyle: 'italic',
    padding: 10,
  },
  textNoPlaylists: {
    textAlign: 'center',
    margin: 10,
  },
  itemCard: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'lightgray',
    margin: 10,
  },
  buttonCollection: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconAction: {
    marginLeft: 15, // Space out buttons if needed
  },
})

export default CustomPlaylistItem