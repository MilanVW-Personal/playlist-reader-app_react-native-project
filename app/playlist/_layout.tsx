import {FunctionComponent} from 'react'
import {Stack} from 'expo-router'


const StackLayoutHome: FunctionComponent = () => {
  return (
      <Stack>
        <Stack.Screen
          name="all"
          options={{
            title: "Todays Top Hits"
          }}/>
      </Stack>
  )
}

export default StackLayoutHome