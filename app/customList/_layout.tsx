import {FunctionComponent} from 'react'
import {Stack} from 'expo-router'

interface _layoutProps {

}

const StackLayoutCustomList: FunctionComponent<_layoutProps> = () => {
  return (
    <Stack>
      <Stack.Screen
        name="start"
        options={{
          title: "Your playlists",
          headerBackVisible: false
        }}
      />
      <Stack.Screen
          name="create"
          options={{
            title: "Create new playlist"
          }}
      />
      <Stack.Screen
        name="[playlistId]"
        options={{
          title: "Edit playlist"
        }}
      />
    </Stack>
  )
}

export default StackLayoutCustomList