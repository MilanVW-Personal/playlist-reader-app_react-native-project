import {FunctionComponent} from 'react'
import {Text, View} from 'react-native'
import {Label} from '@react-navigation/elements'

interface AccountPageProps {
  username: string | undefined
  email: string | undefined
}

const AccountPage: FunctionComponent<AccountPageProps> = ({username, email}) => {
  return (
    <>
      <View>
        <Label>Your account</Label>
        <View>
          {/*Flex*/}
          <Text>Username: {username}</Text>
          <Text>Email address: {email}</Text>
        </View>
      </View>
    </>
  )
}

export default AccountPage