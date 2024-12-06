import {FunctionComponent} from 'react'
import {Stack} from 'expo-router'

const StackLayoutHome: FunctionComponent = () => {
  return (
    <Stack>
      <Stack.Screen
        name="all"
        options={{
          title: 'Ultratop 50 Singles - Vlaanderen',
        }}
      />
      <Stack.Screen
        name="[itemId]"
        options={{
          title: 'Details of song',
        }}
      />
    </Stack>
  )
}

export default StackLayoutHome