import {FunctionComponent} from 'react'
import {Modal, View} from 'react-native'

interface ModalPopUpsProps {
  onClose: () => void
  visible: boolean
}

const ModalPopUp: FunctionComponent<ModalPopUpsProps> = ({onClose, visible}) => {
  return (
    <View style={{backgroundColor: 'black'}}>
      <Modal animationType={'slide'} visible={visible} onRequestClose={onClose}></Modal>
    </View>
  )
}

export default ModalPopUp