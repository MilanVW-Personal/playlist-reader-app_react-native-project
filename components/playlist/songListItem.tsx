import {FunctionComponent} from 'react'
import {StyleSheet, View} from 'react-native'
import {Label} from '@react-navigation/elements'
import {ITrack} from '@/models/ITrack'
import {useRouter} from 'expo-router'
import ShareModule from '@/components/shareModule'
import {Gesture, GestureDetector, GestureHandlerRootView} from 'react-native-gesture-handler'
import {runOnJS} from 'react-native-reanimated'

const SongListItem: FunctionComponent<ITrack> = ({artists, title, id}) => {
  const router = useRouter()

  const doSingleTap = () => {
    router.push(`../playlist/${id}`)
  }

  const doDoubleTap = () => {
    console.log('double tap')

  }
  const singleTap = Gesture.Tap()
    .numberOfTaps(1) // hoeft er niet perse te staan
    .onEnd(() => runOnJS(doSingleTap)())

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd(() => runOnJS(doDoubleTap)())

  const tapGesture = Gesture.Exclusive(doubleTap, singleTap)

  return (
    <>
      {/* Bij het drukken op een item, zal de id (vanuit interface), worden meegegeven, zodat deze naar de detailpagina zal gaan. */}
      <GestureHandlerRootView style={styles.container}>
        <GestureDetector gesture={tapGesture}>
          <View>
            <Label style={styles.songTitle}>{title}</Label>
            <Label style={styles.songArtist}>{artists.map(a => a.name).join(', ')}</Label>
          </View>
        </GestureDetector>
      </GestureHandlerRootView>
    </>
  )
}

const styles = StyleSheet.create({
  // style kan later nog veranderen
  container: {
    margin: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#191414',
    borderWidth: 1,
    textAlign: 'center',
  },
  songTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1ed760',
  },
  songArtist: {
    fontSize: 15,
    color: '#1db954',
  },
})

export default SongListItem