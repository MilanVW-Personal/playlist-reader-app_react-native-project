import {ChangeEvent, FunctionComponent, useState} from 'react'
import {Button, KeyboardAvoidingView, StyleSheet, TextInput, View} from 'react-native'
import {Label} from '@react-navigation/elements'
import {createNewAccount} from '@/api/users'
import {useRouter} from 'expo-router'
import {FontAwesome5} from '@expo/vector-icons'

interface RegisterProps {}

const RegisterForm: FunctionComponent<RegisterProps> = () => {
  const [newUserEmail, setNewUserEmail] = useState('')
  const [newUserName, setNewUserName] = useState('')
  const [newUserPassword, setNewUserPassword] = useState('')
  const [showPass, setShowPass] = useState<boolean>(false)
  const router = useRouter()

  const handleEmailInput = (evt: ChangeEvent<HTMLInputElement>) => {
    setNewUserEmail(evt.target.value)
  }

  const handleUserNameInput = (evt: ChangeEvent<HTMLInputElement>) => {
    setNewUserName(evt.target.value)
  }

  const handlePasswordInput = (evt: ChangeEvent<HTMLInputElement>) => {
    setNewUserPassword(evt.target.value)
  }

  return (
    <KeyboardAvoidingView behavior={'padding'}>
      <Label>Create your new account: </Label>
      <View>
        <Label>Email address: </Label>
        <TextInput style={styles.inputField} placeholder="example@mail.com" onChange={() => handleEmailInput} />
        <Label>Username: </Label>
        <TextInput style={styles.inputField} placeholder="username" onChange={() => handleUserNameInput} />
        <Label>Password: </Label>
        <TextInput style={styles.inputField} placeholder="placeholder" onChange={() => handlePasswordInput} secureTextEntry={showPass}/>
      </View>
      <Button
        title="Create Account"
        onPress={() => {
          if (createNewAccount(newUserEmail, newUserName, newUserPassword))
            router.push('/account/start')
          // console.log(newUserName, newUserEmail, newUserPassword)
        }}
      />
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