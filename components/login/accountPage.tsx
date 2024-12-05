import {FunctionComponent} from 'react'
import {Text, View} from 'react-native'
import {Label} from '@react-navigation/elements'
import {IUser} from '@/models/IUser'
import {Redirect} from 'expo-router'

interface AccountPageProps extends IUser {
}

const AccountPage: FunctionComponent<AccountPageProps> = ({username, password, email}) => {

  return (
    <>
        <View>
          <Label>Your account</Label>
          <View>
            {/*Flex*/}
            <Text>Username: {username}</Text>
            <Text>Password: {password}</Text>
            <Text>Email address: {email}</Text>
          </View>
        </View>
    </>
  )
}

export default AccountPage