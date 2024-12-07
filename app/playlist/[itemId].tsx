import {FunctionComponent} from 'react'
import {useLocalSearchParams} from 'expo-router'
import SongListDetail from '@/components/playlist/SongListDetail'



const DetailPage: FunctionComponent = () => {
  const {itemId} = useLocalSearchParams<{itemId: string}>()
  // itemId ophalen uit de routing
  return (
    <>
      <SongListDetail id={itemId} />
    </>
  )
}

export default DetailPage