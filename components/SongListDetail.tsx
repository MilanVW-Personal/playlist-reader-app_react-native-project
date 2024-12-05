import {FunctionComponent, useEffect, useState} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {getTrackDetails} from '@/api/spotifyApi'
import {ITrack} from '@/models/ITrack'

interface SongListDetailProps {
  id: string
}

const SongListDetail: FunctionComponent<SongListDetailProps> = ({id}) => {
  const [detailsSong, setDetailsSong] = useState<ITrack>()
  // console.log(id)

  useEffect(() => {
    const haalDetailsSongOp = () => {
      const details = getTrackDetails(id)
      setDetailsSong(details)
      // console.log(details)
    }

    if (id != null) haalDetailsSongOp()
  }, [id])

  return (
    <>
      <View>
        <View style={styles.container}>
          <Image style={styles.imageSong} source={{uri: detailsSong?.imageUrl}} />
          <Text style={styles.titleSong}>{detailsSong?.title}</Text>
        </View>

        <View>
          <Text style={styles.viewTitle}>Artist(s) of song: </Text>
          <Text style={styles.artist}>{detailsSong?.artists.map(a => a.name).join(', ')}</Text>
        </View>

        <View>
          <Text style={styles.viewTitle}>Current position: </Text>
          <Text style={styles.artist}>{detailsSong?.currentPosition}</Text>
        </View>

        <View>
          <Text style={styles.viewTitle}>Explicit:</Text>
          <Text style={styles.artist}>
            {detailsSong?.explicit
              ? <Text>Yes</Text>
              : <Text>No</Text>
            }
          </Text>
        </View>
        <View>
          <Text style={styles.viewTitle}>Duration:</Text>
          <Text>{detailsSong?.duration}</Text>
        </View>
        <View>
          <Text style={styles.viewTitle}>Popularity:</Text>
          <Text>{detailsSong?.popularity}%</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  titleSong: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 'auto',
  },
  imageSong: {
    width: 150,
    height: 150,
  },
  viewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 'auto',
  },
  artist: {
    fontSize: 15,
  },
  detailContainer: {
    flexDirection: 'row',
    display: 'flex',
    backgroundColor: 'gray',
    textAlign: 'center',
  }
})

export default SongListDetail