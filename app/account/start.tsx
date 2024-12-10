import {FunctionComponent} from 'react'
import {StyleSheet, View} from 'react-native'
import {auth} from '@/api/firebaseConfig'
import AccountPage from '@/components/login/accountPage'
import {Link} from 'expo-router'

const Start: FunctionComponent = () => {
  const currentUser = auth.currentUser

  return (
    <View>
      {currentUser == null
        ? (
          <View>
            <Link href="../account/login" style={styles.linkStyle}>
              Login
            </Link>
            <Link href="../account/register" style={styles.linkStyle}>
              Create Account
            </Link>
          </View>)
        :
        (
          <View>
            <AccountPage
              username={currentUser?.displayName?.toString()}
              email={currentUser?.email?.toString()} />
          </View>
        )
      }
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