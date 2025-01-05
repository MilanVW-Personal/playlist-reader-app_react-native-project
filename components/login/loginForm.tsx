import {FunctionComponent, useState} from 'react'
import {KeyboardAvoidingView, StyleSheet, TextInput} from 'react-native'
import {Label} from '@react-navigation/elements'
import {login} from '@/api/users'
import {Link, useRouter} from 'expo-router'

const LoginForm: FunctionComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const route = useRouter()

  const submitLogin = async () => {
    await login(email, password)
    alert('Logged in!')
    route.push('/account/start')
  }

  return (
    <>
      <KeyboardAvoidingView behavior={'padding'} style={styles.card}>
        <Label style={styles.cardTitle}>Login</Label>
        <Label style={styles.labelInput}>Enter your email: </Label>
        <TextInput placeholder="Enter your email" style={styles.inputField} onChangeText={setEmail} />
        <Label style={styles.labelInput}>Enter your password: </Label>
        <TextInput
          placeholder="Enter your password"
          style={styles.inputField}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Link style={[styles.linkStyle, styles.button]} href={'..'} onPress={submitLogin}>
          Login
        </Link>
      </KeyboardAvoidingView>
    </>
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
    textAlign: 'left',
    marginTop: 'auto',
    marginLeft: 10,
    marginRight: 10,
    height: 'auto',
    width: 'auto',
    padding: 5,
    backgroundColor: 'black',
  },
  button: {
    borderRadius: 5,
    width: 'auto',
    height: '25%',
    margin: 10,
    backgroundColor: '#1ed760',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 'auto',
    color: '#1ed760',
  },
  labelInput: {
    textAlign: 'left',
    padding: 5,
    color: 'white',
    margin: 'auto',
    fontSize: 15,
  },
  inputField: {
    backgroundColor: 'lightgray',
    width: 'auto',
    height: 30,
    margin: 5,
    color: 'black',
    padding: 5,
    borderRadius: 2,
  },
})

export default LoginForm