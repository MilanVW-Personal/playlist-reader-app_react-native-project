import {FunctionComponent} from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'
import {Label} from '@react-navigation/elements'
import {auth} from '@/api/firebaseConfig'
import {useRouter} from 'expo-router'

interface AccountPageProps {
  username: string | undefined
  email: string | undefined
}

const AccountPage: FunctionComponent<AccountPageProps> = ({username, email}) => {
  const router = useRouter()

  const signOut = async () => {
    await auth.signOut()
    alert("Logged out!")
    router.push('../account/start')
  }

  return (
    <>
      <View style={styles.card}>
        <Label style={styles.cardTitle}>Your account</Label>
        <View>
          {/*Flex*/}
          <Text style={styles.text}>Username: {username}</Text>
          <Text style={styles.text}>Email address: {email}</Text>
          <Button title={"Logout"} onPress={signOut}/>
        </View>
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
    marginTop: 'auto',
    marginLeft: 10,
    marginRight: 10,
    height: 'auto',
    width: 'auto',
    padding: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 'auto',
    color: '#1ed760',
  },
  text: {
    textAlign: 'left',
    padding: 5,
    color: 'auto',
    margin: 'auto',
    fontSize: 15,
  },
})

export default AccountPage