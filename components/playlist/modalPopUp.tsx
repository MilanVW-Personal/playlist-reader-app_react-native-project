import {FunctionComponent, useEffect, useState} from 'react'
import {Button, Modal, StyleSheet, View} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import {auth} from '@/api/firebaseConfig'
import {addSongToPlaylist, getPlaylistsFromUser} from '@/api/playlist'
import {IPlaylist} from '@/models/IPlaylist'
import {Label} from '@react-navigation/elements'
import {useRouter} from 'expo-router'
import {ITrack} from '@/models/ITrack'

interface ModalPopUpsProps {
  onClose: () => void
  visible: boolean
  song: ITrack | undefined
}

const ModalPopUp: FunctionComponent<ModalPopUpsProps> = ({onClose, visible, song}) => {
  
  const currentUser = auth.currentUser
  const [userPlaylists, setUserPlaylists] = useState<IPlaylist[]>([])
  const [value, setValue] = useState<number>(0)
  const router = useRouter()

  const changeValue = (index: number)=> {
    setValue(index)
    console.log(index)
  }

  useEffect(() => {
    const getAll = async () => {
      const allUserPlaylists = await getPlaylistsFromUser(currentUser?.uid as string)
      setUserPlaylists(allUserPlaylists)
    }

    getAll()
  }, [])
  
  return (
      <Modal animationType={'slide'} transparent visible={visible} onRequestClose={onClose}>
        <View style={styles.outerView}>
          <View style={styles.innerView}>
            <Label style={styles.titleModal}>Choose a playlist</Label>
            <Picker
              selectedValue={value}
              onValueChange={(itemIndex) => changeValue(itemIndex)}>
              {userPlaylists.map((item, index) => {
                return (
                  <Picker.Item key={index} label={item.title} value={index}/>
                )
              })}
            </Picker>
            <Button title={"Add to selected playlist"} onPress={async () => {
              await addSongToPlaylist(userPlaylists[value].id, song)
              router.push("..")
            }}/>
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  innerView: {
    width: 350,
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  titleModal: {
    fontSize: 17,
    fontWeight: 'bold',
  }
})

export default ModalPopUp