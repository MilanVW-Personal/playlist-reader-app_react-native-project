import {Tabs} from 'expo-router'
import {FontAwesome5} from '@expo/vector-icons'

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" redirect />
      <Tabs.Screen
        name="playlist"
        options={{
          title: 'Top Songs',
          headerShown: false,
          tabBarIcon: ({color, size}) => <FontAwesome5 size={size} color={color} name="spotify" />,
        }}
      />
      <Tabs.Screen
        name="customList"
        options={{
          title: 'Created lists',
          headerShown: false,
          tabBarIcon: ({color, size}) => <FontAwesome5 size={size} color={color} name="list" />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          headerShown: false,
          tabBarIcon: ({color, size}) => <FontAwesome5 size={size} color={color} name="user" />,
        }}
      />
    </Tabs>
  )
}
