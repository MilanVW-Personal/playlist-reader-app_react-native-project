import {FunctionComponent} from 'react'
import {StyleSheet, View} from 'react-native'
import {Link} from 'expo-router'

const Start: FunctionComponent = () => {
  return (
    <View>
      <Link href="../account/login" style={styles.linkStyle}>
        Login
      </Link>
      <Link href="../account/register" style={styles.linkStyle}>
        Create Account
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  linkStyle: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    height: '25%',
  },
})
export default Start