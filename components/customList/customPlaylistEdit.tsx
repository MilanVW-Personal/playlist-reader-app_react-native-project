import {FunctionComponent} from 'react'
import {StyleSheet, Text, View} from 'react-native'

interface CustomPlaylistDetailProps {
  id: string
}

const CustomPlaylistEdit: FunctionComponent<CustomPlaylistDetailProps> = ({id}) => {
  return (
    <>
      <View style={styles.card}>
        <Text>{id}</Text>
      </View>
    </>
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