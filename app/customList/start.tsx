import {FunctionComponent} from 'react'
import {StyleSheet, Text, View} from 'react-native'

interface StartProps {

}

const Start: FunctionComponent<StartProps> = () => {
  return (
    <View>
      <Text style={styles.text}>You must login before you can create any playlists of your own!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  }
})

export default Start