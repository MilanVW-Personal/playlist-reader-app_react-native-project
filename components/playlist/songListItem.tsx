import {FunctionComponent} from 'react'
import {Share, StyleSheet, View} from 'react-native' // Share is hier mijn eerste native module
import {Label} from '@react-navigation/elements'
import {ITrack} from '@/models/ITrack'
import {useRouter} from 'expo-router'
import {Gesture, GestureDetector, GestureHandlerRootView} from 'react-native-gesture-handler'
import {runOnJS} from 'react-native-reanimated'

const SongListItem: FunctionComponent<ITrack> = ({artists, title, id, webURL}) => {
  const router = useRouter()

  /* Deze functie zal ervoor zorgen dat er een share-menu op het scherm wordt getoond, waarin je de url van de song zal kunnen delen */
  const shareSongLink = async () => {
    const result = await Share.share({
      title: 'Listen to this!',
      message: webURL,
    })

    if (result.action == Share.sharedAction) {
      if (result.activityType) 
        alert(`Shared w/ ${result.activityType}`)
      else 
        alert("Shared!")
    } else if (result.action === Share.dismissedAction) {
        // alert("Cancelled share.")
    }
  }

  // Functie die een single tap gesture zal uitvoeren
  const doSingleTap = () => {
    router.push(`../playlist/${id}`)
  }

  // Functie die een double tap gesture zal uitvoeren
  const doDoubleTap = async () => {
    await shareSongLink() // hier zal de share functie worden uitgevoerd
  }

  const singleTap = Gesture.Tap() // hier zal de single tap worden geregistreerd
    .numberOfTaps(1) // hoeft er niet perse te staan
    .onEnd(() => runOnJS(doSingleTap)())

  const doubleTap = Gesture.Tap() // hier zal de double tap worden geregistreerd
    .numberOfTaps(2)
    .onEnd(() => runOnJS(doDoubleTap)())

  const tapGesture = Gesture.Exclusive(doubleTap, singleTap) // De gestures exclusive maken door ze in één gesture te stoppen, die wordt gebruikt bij de GestureDetector

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