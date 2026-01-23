import {FunctionComponent, useState} from 'react'
import {Button, StyleSheet, Text, TextInput, View} from 'react-native'
import {useRouter} from 'expo-router'
import {createPlaylist} from '@/api/playlist'
import {auth} from '@/api/firebaseConfig'

interface CreateProps {}

const Create: FunctionComponent<CreateProps> = () => {
  const [titleInput, setTitleInput] = useState<string>('')
  const [descriptionInput, setDescriptionInput] = useState<string>('')
  const router = useRouter()
  const userId = auth.currentUser?.uid as string

  const submitCreateForm = async () => {
    try {
      await createPlaylist(titleInput, descriptionInput, userId)
      setTitleInput('')
      setDescriptionInput('')
      alert('created!')
      router.push('..')
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  return (
    <>
      <View>
        <Text style={styles.screenTitle}>Create a new playlist</Text>
        <View style={styles.fields}>
          <Text style={styles.inputLabel}>Playlist title: </Text>
          <TextInput
            style={styles.inputField}
            placeholder={'Playlist x'}
            value={titleInput}
            onChangeText={setTitleInput}
          />
        </View>
        <View style={styles.fields}>
          <Text style={styles.inputLabel}>Playlist description: </Text>
          <TextInput
            style={styles.inputField}
            placeholder={'This is a playlist...'}
            value={descriptionInput}
            onChangeText={setDescriptionInput}
          />
        </View>
        <View style={styles.fields}>
          <Button title={'Submit'} onPress={submitCreateForm} />
        </View>
      </View>
    </>
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
})

export default Create