import {FunctionComponent, useState} from 'react'
import {Button, StyleSheet, Text, TextInput, View} from 'react-native'
import {ITrack} from '@/models/ITrack'
import {Label} from '@react-navigation/elements'
import {updatePlaylist} from '@/api/playlist'
import {useRouter} from 'expo-router'

interface CustomPlaylistDetailProps {
  id: string
  titlePlaylist: string
  descriptionPlaylist: string
  songs?: ITrack[]
}

const CustomPlaylistEdit: FunctionComponent<CustomPlaylistDetailProps> = ({id ,titlePlaylist, descriptionPlaylist, songs}) => {

  const [newTitle, setNewTitle] = useState<string>(titlePlaylist)
  const [newDesc, setNewDesc] = useState<string>(descriptionPlaylist)
  const router = useRouter()

  const submitChanges = async () => {
    await updatePlaylist(id, newTitle, newDesc)
    router.push('..')
    alert("Playlist updated!")
  }

  return (
    <View>
      <View>
        <Text style={styles.screenTitle}>Edit playlist</Text>
        <View style={styles.fields}>
          <Text style={styles.inputLabel}>Playlist title: </Text>
          <TextInput
            style={styles.inputField}
            value={newTitle}
            onChangeText={setNewTitle}
          />
        </View>
        <View style={styles.fields}>
          <Text style={styles.inputLabel}>Playlist description: </Text>
          <TextInput
            style={styles.inputField}
            value={newDesc}
            onChangeText={setNewDesc}
          />
        </View>
        <View style={styles.fields}> {/*Hier komt swipe to delete gesture*/}
          <Text style={styles.inputLabel}>Songs:  </Text>
          {songs?.map((s, index) => {
            return <Text style={styles.songCardItem} key={index}>{s.title}</Text>
          })}
        </View>
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
    height: 'auto'
  },
})
export default CustomPlaylistEdit