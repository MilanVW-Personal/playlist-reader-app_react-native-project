import {FunctionComponent, useState} from 'react'
import {Button, KeyboardAvoidingView, StyleSheet, TextInput} from 'react-native'
import {Label} from '@react-navigation/elements'
import {login} from '@/api/users'
import {useRouter} from 'expo-router'

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
      <KeyboardAvoidingView behavior={'padding'}>
        <Label style={styles.labelInput}>Enter email: </Label>
        <TextInput placeholder="Enter your email" onChangeText={setEmail} />
        <Label style={styles.labelInput}>Enter password: </Label>
        <TextInput placeholder="Enter your password" onChangeText={setPassword} secureTextEntry />
        <Button title="Login" onPress={submitLogin} />
      </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
  labelInput: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
})

export default LoginForm