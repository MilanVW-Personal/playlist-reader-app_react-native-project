import {FunctionComponent, useEffect, useState} from 'react'
import {Modal, View} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import {auth} from '@/api/firebaseConfig'
import {getPlaylistsFromUser} from '@/api/playlist'
import {IPlaylist} from '@/models/IPlaylist'

interface ModalPopUpsProps {
  onClose: () => void
  visible: boolean
}

const ModalPopUp: FunctionComponent<ModalPopUpsProps> = ({onClose, visible}) => {
  
  const currentUser = auth.currentUser
  const [userPlaylists, setUserPlaylists] = useState<IPlaylist[]>([])
  const [value, setValue] = useState<number>(0)

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
    <View style={{backgroundColor: 'black'}}>
      <Modal animationType={'slide'} visible={visible} onRequestClose={onClose}>
          <Picker
            selectedValue={value}
            onValueChange={(itemIndex) => changeValue(itemIndex)}>
            {userPlaylists.map((item, index) => {
              return (
                <Picker.Item label={item.title} value={index}/>
              )
            })}
          </Picker>
      </Modal>
    </View>
  )
}

export default ModalPopUp