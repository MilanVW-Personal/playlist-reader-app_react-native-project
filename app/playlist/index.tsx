import {FunctionComponent} from 'react'
import {SafeAreaView, View} from 'react-native'
import {Link} from 'expo-router'
import {SafeAreaProvider} from 'react-native-safe-area-context'

interface IndexProps {

}

const Index: FunctionComponent<IndexProps> = () => {
  return (
      <>
          <SafeAreaProvider>
            <SafeAreaView>
              <Link href=".."> Back </Link>
            </SafeAreaView>
          </SafeAreaProvider>
      </>
  )
}

export default Index