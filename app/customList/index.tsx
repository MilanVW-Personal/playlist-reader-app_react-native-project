import {FunctionComponent} from 'react'
import {View} from 'react-native'
import {Link} from 'expo-router'

interface IndexProps {

}

const Index: FunctionComponent<IndexProps> = () => {
  return (
    <>
      <View>
        <Link href=".."> Back </Link>
      </View>
    </>
  )
}

export default Index