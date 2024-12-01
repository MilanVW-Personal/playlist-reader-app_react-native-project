import {FunctionComponent, useEffect, useState} from 'react'
import SongListItem from '@/components/songListItem'
import {getApiKeyAndShowData} from '@/api/spotifyApi'
import {ITrack} from '@/models/ITrack'
import {ScrollView} from 'react-native'

const SongList: FunctionComponent = () => {
  const [tracks, setTracks] = useState<ITrack[]>([])

  useEffect(() => {
    const fetchTracks = async () => {
      const fetchedTracks = await getApiKeyAndShowData()
      setTracks(fetchedTracks)
    }

    fetchTracks()
  }, [])

  return (
    <>
      <ScrollView>
        {tracks.map((d, i) => {
          return <SongListItem key={i} {...d} />
        })}
      </ScrollView>
    </>
  )
}

export default SongList