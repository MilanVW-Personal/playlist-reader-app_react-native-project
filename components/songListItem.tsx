import {FunctionComponent} from 'react'
import {StyleSheet, View} from 'react-native'
import {Label} from '@react-navigation/elements'
import {ITrack} from '@/models/ITrack'
import {Link} from 'expo-router'

const SongListItem: FunctionComponent<ITrack> = ({artists, title, id}) => {
  return (
    <>
      {/* Bij het drukken op een item, zal de id (vanuit interface), worden meegegeven, zodat deze naar de detailpagina zal gaan. */}
      <Link href={`../playlist/${id}`} style={styles.container}>
        <View>
          <Label style={styles.songTitle}>{title}</Label>
          <Label style={styles.songArtist}>{artists.map(a => a.name).join(', ')}</Label>
        </View>
      </Link>
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