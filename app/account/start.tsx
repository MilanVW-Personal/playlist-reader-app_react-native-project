import {FunctionComponent} from 'react'
import {StyleSheet, View} from 'react-native'
import {auth} from '@/api/firebaseConfig'
import AccountPage from '@/components/login/accountPage'
import {Link} from 'expo-router'
import {Label} from '@react-navigation/elements'

const Start: FunctionComponent = () => {
  const currentUser = auth.currentUser

  return (
    <View>
      {currentUser == null
        ? (
          <View style={styles.card}>
            <Label style={styles.cardTitle}>Welcome</Label>
            <Link href="../account/login" style={[styles.linkStyle, styles.button]}>
              Login
            </Link>
            <Link href="../account/register" style={[styles.linkStyle, styles.button]}>
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
    backgroundColor: 'gray',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
    fontWeight: 'bold',

  },

  card: {
    borderWidth: 2,
    borderColor: 'lightgray',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 'auto',
    marginLeft: 10,
    marginRight: 10,
    height: '50%',
    width: 'auto',
    padding: 5,
    backgroundColor: 'black',
  },
  button: {
    borderRadius: 5,
    width: 'auto',
    height: '25%',
    margin: 5,
    backgroundColor: '#1ed760'
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 'auto',
    color: '#1ed760',
  }
})
export default Start