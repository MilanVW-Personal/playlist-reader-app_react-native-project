import {FunctionComponent} from 'react'
import {Stack} from 'expo-router'


const StackLayoutLogin: FunctionComponent = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="start"
          options={{
            title: "Manage your account"
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            title: "Login to your account"
          }}
        />
        <Stack.Screen
          name="register"
          options={{
              title: "Create a new account"
            }
          }/>
      </Stack>
    </>
  )
}

export default StackLayoutLogin