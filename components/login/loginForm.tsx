import {ChangeEvent, FunctionComponent, useState} from 'react'
import {Button, KeyboardAvoidingView, StyleSheet, TextInput} from 'react-native'
import {Label} from '@react-navigation/elements'
import {loginUser} from '@/api/users'
import {useRouter} from 'expo-router'

const LoginForm: FunctionComponent = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const route = useRouter()

  const changeUsername = (evt: ChangeEvent<HTMLInputElement>) => {
    setUsername(evt.target.value)
  }

  const changePassword = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value)
  }

  return (
    <>
      <KeyboardAvoidingView behavior={'padding'}>
        <Label style={styles.labelInput}>Enter username: </Label>
        <TextInput placeholder="Enter your username" onChange={() => changeUsername} />
        <Label style={styles.labelInput}>Enter password: </Label>
        <TextInput placeholder="Enter your password" onChange={() => changePassword} secureTextEntry />
        <Button
          title="Login"
          onPress={() => {
            const user = loginUser(username, password)
            if (user)
              route.push("/account/start")
          }}
        />
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