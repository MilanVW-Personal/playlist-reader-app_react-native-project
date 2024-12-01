import {FunctionComponent} from 'react'
import {Button, StyleSheet, View} from 'react-native'
import {Label, Text} from '@react-navigation/elements'
import {getApiKeyAndShowData} from "@/api/spotifyApi"

interface SongListItemProps {
  artist: string
  title: string
}

const SongListItem: FunctionComponent<SongListItemProps> = ({artist, title}) => {

  return (
    <>
      <View style={styles.container}>
        <Label style={styles.songTitle}>{title}</Label>
        <Text style={styles.songArtist}>{artist}</Text>
        <Button title="Get key" onPress={getApiKeyAndShowData}></Button>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  songTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'green',
  },
  songArtist: {
    fontSize: 15,
    textAlign: 'center',
    color: 'green',
  },
})

export default SongListItem