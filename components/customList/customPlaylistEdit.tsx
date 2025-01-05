import {FunctionComponent, useState} from 'react'
import {Button, Pressable, StyleSheet, Text, TextInput, View} from 'react-native'
import {ITrack} from '@/models/ITrack'
import {removeSongFromPlaylist, updatePlaylist} from '@/api/playlist'
import {useRouter} from 'expo-router'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable'
import {FontAwesome5} from '@expo/vector-icons'

interface CustomPlaylistDetailProps {
  id: string
  titlePlaylist: string
  descriptionPlaylist: string
  songs?: ITrack[]
}

const CustomPlaylistEdit: FunctionComponent<CustomPlaylistDetailProps> = ({id, titlePlaylist, descriptionPlaylist, songs}) => {
  const [newTitle, setNewTitle] = useState<string>(titlePlaylist)
  const [newDesc, setNewDesc] = useState<string>(descriptionPlaylist)
  const router = useRouter()

  const submitChanges = async () => {
    await updatePlaylist(id, newTitle, newDesc) // na submitten zal de data in de firebase collectie wel aanpassen, maar niet op het scherm
    router.push('..')
    alert('Playlist updated!')
  }

  // Delete knop die bij swipe tevoorschijn komt.
  const swipeToDeleteSongAction = (songToDelete: ITrack) => (
    // de OnPress kan ook zonder async await...
    <View style={styles.deleteButtonSwipe}>
      <Pressable onPress={async () => await removeSongFromPlaylist(id, songToDelete)}>
          <FontAwesome5 name={"trash"} style={{textAlign: 'center'}} />
      </Pressable>
    </View>
  )

  return (
    <View>
      <View>
        <Text style={styles.screenTitle}>Edit playlist</Text>
        <View style={styles.fields}>
          <Text style={styles.inputLabel}>Playlist title: </Text>
          <TextInput style={styles.inputField} value={newTitle} onChangeText={setNewTitle} />
        </View>
        <View style={styles.fields}>
          <Text style={styles.inputLabel}>Playlist description: </Text>
          <TextInput style={styles.inputField} value={newDesc} onChangeText={setNewDesc} />
        </View>

        <GestureHandlerRootView style={styles.fields}>
          {/*Hier staat de swipe to delete gesture*/}
          <Text style={styles.inputLabel}>Songs: </Text>
          {songs?.map((s, index) => {
            return (
              // Als je hier naar links zou swipen op een item, dan zal deze song verwijderd worden
              <Swipeable key={index} renderRightActions={() => swipeToDeleteSongAction(s)}>
                <Text style={styles.songCardItem} key={index}>
                  {s.title}
                </Text>
              </Swipeable>
            )
          })}
        </GestureHandlerRootView>

        <View style={styles.fields}>
          <Button title={'Submit changes'} onPress={submitChanges} />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  screenTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  fields: {
    margin: 10,
  },
  inputLabel: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  inputField: {
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 2,
    paddingLeft: 10,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  songCardItem: {
    marginTop: 5,
    padding: 5,
    borderColor: 'gray',
    fontSize: 15,
    borderWidth: 0.5,
    width: 'auto',
    height: 'auto',
  },
  deleteButtonSwipe: {
    backgroundColor: 'red',
    borderRadius: 5,
    margin: 5,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: "center"
  }
})
export default CustomPlaylistEdit