import {SafeAreaView} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default function Index() {

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}></SafeAreaView>
    </SafeAreaProvider>
  )
}
