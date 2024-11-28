import {FunctionComponent} from 'react'
import {View} from 'react-native'
import RegisterForm from '@/components/login/registerForm'

interface RegisterProps {

}

const Register: FunctionComponent<RegisterProps> = () => {
  return (
    <View>
      <RegisterForm/>
    </View>
  )
}

export default Register