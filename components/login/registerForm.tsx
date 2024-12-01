import {ChangeEvent, FunctionComponent, useState} from 'react'
import {Button, StyleSheet, TextInput, View} from 'react-native'
import {Label} from '@react-navigation/elements'
import {createNewAccount} from '@/api/users'

interface RegisterProps {

}

const RegisterForm: FunctionComponent<RegisterProps> = () => {

  const [newUserEmail, setNewUserEmail] = useState('')
  const [newUserName, setNewUserName] = useState('')
  const [newUserPassword, setNewUserPassword] = useState('')

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
    <View>
      <Label>Create your new account: </Label>
      <View>
        <Label>Email address: </Label>
        <TextInput style={styles.inputField} placeholder="example@mail.com" onChange={() => handleEmailInput}/>
        <Label>Username: </Label>
        <TextInput style={styles.inputField} placeholder="username" onChange={() => handleUserNameInput}/>
        <Label>Password: </Label>
        <TextInput style={styles.inputField} placeholder="placeholder" onChange={() => handlePasswordInput}/>
      </View>
      <Button title="Create Account" onPress={() => createNewAccount(newUserEmail, newUserName, newUserPassword)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 1,
    borderColor: 'gray',
  }
})

export default RegisterForm