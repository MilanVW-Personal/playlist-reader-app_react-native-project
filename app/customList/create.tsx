import {FunctionComponent, useState} from 'react'
import {Button, Text, TextInput, View} from 'react-native'
import {Link, useRouter} from 'expo-router'
import {createPlaylist} from '@/api/playlist'
import {auth} from '@/api/firebaseConfig'

interface CreateProps {}

const Create: FunctionComponent<CreateProps> = () => {
  const [titleInput, setTitleInput] = useState<string>('')
  const [descriptionInput, setDescriptionInput] = useState<string>('')
  const router = useRouter()
  const userId = auth.currentUser?.uid as string

  const submitCreateForm = async () => {

    console.log(userId)
    try {
      await createPlaylist(titleInput, descriptionInput, userId)
      setTitleInput("")
      setDescriptionInput("")
      alert("created!")
      router.push("/customList/start")
    }
    catch (error){
      console.error(error)
    }

  }


  return (
    <>
      <View>
        <Text>Create a new playlist</Text>
        <View>
          <Text>Playlist title: </Text>
          <TextInput placeholder={'Playlist x'} value={titleInput} onChangeText={setTitleInput} />
        </View>
        <View>
          <Text>Playlist description: </Text>
          <TextInput placeholder={'This is a playlist...'} value={descriptionInput} onChangeText={setDescriptionInput} />
        </View>
        <Link href={'/customList/start'}>
          <Button title={'Submit'} onPress={submitCreateForm} />
        </Link>
      </View>
    </>
  )
}

export default Create