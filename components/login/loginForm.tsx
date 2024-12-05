import {ChangeEvent, FunctionComponent, useState} from 'react'
import {Button, StyleSheet, TextInput, View} from 'react-native'
import {Label} from '@react-navigation/elements'
import {loginUser} from '@/api/users'

const LoginForm: FunctionComponent = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const changeUsername = (evt: ChangeEvent<HTMLInputElement>) => {
    setUsername(evt.target.value)
  }

  const changePassword = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value)
  }

  return (
    <>
      <View>
        <Label style={styles.labelInput}>Enter username: </Label>
        <TextInput placeholder="Enter your username" onChange={() => changeUsername} />
        <Label style={styles.labelInput}>Enter password: </Label>
        <TextInput placeholder="Enter your password" onChange={() => changePassword} />
        <Button
          title="Login"
          onPress={() => {
            loginUser(username, password)
          }}
        />
      </View>
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