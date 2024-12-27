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
        <Label>Edit title: </Label>
        <TextInput value={newTitle} onChangeText={setNewTitle}/>
      </View>
      <View>
        <Label>Edit playlist description: </Label>
        <TextInput value={newDesc} onChangeText={setNewDesc}/>
      </View>

      <View style={styles.card}>
        {songs?.map((s, index) => {
          return <Text key={index}>{s.title}</Text>
        })}
      </View>
      <Button title={"Submit changes"} onPress={submitChanges}/>
    </View>
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