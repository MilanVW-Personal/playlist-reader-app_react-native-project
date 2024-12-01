import {FunctionComponent} from 'react'
import {StyleSheet, View} from 'react-native'
import {Label, Text} from '@react-navigation/elements'
import {ITrack} from '@/models/ITrack'

const SongListItem: FunctionComponent<ITrack> = ({artists, title, duration}) => {

  const songLength = new Date(duration)


  return (
    <>
      <View style={styles.container}>
        <Label style={styles.songTitle}>{title}</Label>
        {artists.map((a, keyIndex) => {
          return(
            <Label key={keyIndex} style={styles.songArtist}>{a.name}</Label>
          )
        })}
        <Text style={styles.songArtist}>{songLength.toTimeString()}</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({ // style kan later nog veranderen
  container: {
    margin: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#191414',
    borderWidth: 1,
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