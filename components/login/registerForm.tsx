import {ChangeEvent, FunctionComponent, useState} from 'react'
import {Button, KeyboardAvoidingView, StyleSheet, TextInput, View} from 'react-native'
import {Label} from '@react-navigation/elements'
import {register} from '@/api/users'
import {useRouter} from 'expo-router'

interface RegisterProps {}

const RegisterForm: FunctionComponent<RegisterProps> = () => {
  const [newUserEmail, setNewUserEmail] = useState('')
  const [newUserName, setNewUserName] = useState('')
  const [newUserPassword, setNewUserPassword] = useState('')
  const router = useRouter()

  const submitRegister = async () => {
    console.log("test")
    await register(newUserEmail, newUserPassword, newUserName)
    router.push("/account/start")
  }

  return (
    <KeyboardAvoidingView behavior={'padding'}>
      <Label>Create your new account: </Label>
      <View>
        <Label>Email address: </Label>
        <TextInput style={styles.inputField} placeholder="example@mail.com" onChangeText={setNewUserEmail} />
        <Label>Username: </Label>
        <TextInput style={styles.inputField} placeholder="username" onChangeText={setNewUserName} />
        <Label>Password: </Label>
        <TextInput
          style={styles.inputField}
          placeholder="password"
          onChangeText={setNewUserPassword}
          secureTextEntry
        />
      </View>
      <Button title="Create Account" onPress={submitRegister} />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 1,
    borderColor: 'gray',
  },
})

export default RegisterForm