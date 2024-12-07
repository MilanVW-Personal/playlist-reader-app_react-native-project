import {FunctionComponent, useState} from 'react'
import {Button, Text, TextInput, View} from 'react-native'
import {Link, useRouter} from 'expo-router'
import {createPlaylist} from '@/api/playlist'

interface CreateProps {}

const Create: FunctionComponent<CreateProps> = () => {
  const [titleInput, setTitleInput] = useState<string>('')
  const [descriptionInput, setDescriptionInput] = useState<string>('')
  const router = useRouter()

  const changeTitle = (textTitle: string) => {
    setTitleInput(textTitle)
  }

  const changeDesc = (textDesc: string) => {
    setDescriptionInput(textDesc)
  }

  return (
    <>
      <View>
        <Text>Create a new playlist</Text>
        <View>
          <Text>Playlist title: </Text>
          <TextInput placeholder={'Playlist x'} value={titleInput} onChangeText={changeTitle} />
        </View>
        <View>
          <Text>Playlist description: </Text>
          <TextInput placeholder={'This is a playlist...'} value={descriptionInput} onChangeText={changeDesc} />
        </View>
        <Link href={'/customList/start'}>
          <Button title={'Submit'} onPress={() => {
              createPlaylist(titleInput, descriptionInput)
              router.push("../customList/start")
            }
          } />
        </Link>
      </View>
    </>
  )
}

export default Create