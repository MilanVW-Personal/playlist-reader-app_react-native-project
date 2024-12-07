import {FunctionComponent, useEffect, useState} from 'react'
import CustomPlaylistItem from '@/components/customList/customPlaylistItem'
import {deletePlaylist, getAllPlaylists} from '@/api/playlist'
import {Button, View, Text} from 'react-native'
import {useRouter} from 'expo-router'
import {IPlaylist} from '@/models/IPlaylist'

const CustomPlaylist: FunctionComponent = () => {
  const [allPlaylists, setAllPlaylists] = useState<IPlaylist[]>([])
  const router = useRouter()

  // Deze eerste useEffect wordt gebruikt om de lijst op te vullen als deze laadt.
  useEffect(() => {
    const getAll = () => {
      const playlists = getAllPlaylists()
      setAllPlaylists([...playlists])
    }

    getAll()
  }, [])

  // Deze tweede useEffect zal de lijst updaten, als er een nieuwe playlist wordt toegevoegd en er terug genavigeerd wordt naar de overzichtspagina.
  useEffect(() => {
    const updatedPlaylists = getAllPlaylists()
    setAllPlaylists([...updatedPlaylists])
  }, [getAllPlaylists])

  // Functie om een item te kunnen deleten (wordt hier gemaakt, zodat ik de useState niet moet hergebruiken bij de customPlaylistItem.
  // Deze zal worden doorgegeven aan de component door de onPress property in de interface van de component.
  const deleteItem = (positieItem: number) => {
    deletePlaylist(positieItem) // Item verwijderen
    setAllPlaylists([...getAllPlaylists()]) // Meteen de lijst updaten
  }

  return (
    <>
      {allPlaylists.length !== 0 ? // als er items in de array zitten, dan zullen de items getoond worden
        allPlaylists.map((pl, i) => {
        return(
          <CustomPlaylistItem key={i} index={i} {...pl} onPress={() => deleteItem(i)}/>
        )
      }) : // als er geen items in de lijst zitten, dan wordt onderstaande tekst getoond
        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              margin: 5,
              textAlign: 'center'}}>No playlists</Text>
        </View>
      }
      <Button
        title={'Create new playlist'}
        onPress={() => router.push('/customList/create')} />
    </>
  )
}

export default CustomPlaylist