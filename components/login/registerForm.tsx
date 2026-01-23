import {ChangeEvent, FunctionComponent, useState} from 'react'
import {Button, KeyboardAvoidingView, StyleSheet, TextInput, View} from 'react-native'
import {Label} from '@react-navigation/elements'
import {register} from '@/api/users'
import {Link, useRouter} from 'expo-router'

interface RegisterProps {}

const RegisterForm: FunctionComponent<RegisterProps> = () => {
  const [newUserEmail, setNewUserEmail] = useState('')
  const [newUserName, setNewUserName] = useState('')
  const [newUserPassword, setNewUserPassword] = useState('')
  const router = useRouter()

  const submitRegister = async () => {
    await register(newUserEmail, newUserPassword, newUserName)
    router.push("/account/start")
  }

  return (
    <KeyboardAvoidingView behavior={'padding'} style={styles.card}>
      <Label style={styles.cardTitle}>Create your new account: </Label>
      <View>
        <Label style={styles.labelInput}>Email address: </Label>
        <TextInput style={styles.inputField} placeholder="example@mail.com" onChangeText={setNewUserEmail} />
        <Label style={styles.labelInput}>Username: </Label>
        <TextInput style={styles.inputField} placeholder="username" onChangeText={setNewUserName} />
        <Label style={styles.labelInput}>Password: </Label>
        <TextInput
          style={styles.inputField}
          placeholder="password"
          onChangeText={setNewUserPassword}
          secureTextEntry
        />
      </View>
      <Link style={[styles.linkStyle, styles.button]} href={".."} onPress={submitRegister}>Create account</Link>
    </KeyboardAvoidingView>
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
    verticalAlign: 'middle',
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
    backgroundColor: '#1ed760'
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
    borderRadius: 2
  }
})

export default RegisterForm