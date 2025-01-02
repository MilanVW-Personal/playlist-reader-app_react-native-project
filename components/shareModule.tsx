import {FunctionComponent} from 'react'
import {Button, Share, View} from 'react-native'

interface ShareModuleProps {
  songId: string
}

const ShareModule: FunctionComponent<ShareModuleProps> = ({songId}) => {

  const shareSongLink = async () => {
    const result = await Share.share({
      title: 'Listen to this!',
      message: `https://open.spotify.com/track/${songId}`
    })

    if (result.action == Share.sharedAction)
    {
      if (result.activityType)
        console.log('shared w/ ', result.activityType)
      else
        console.log("Shared!")
    } else if (result.action === Share.dismissedAction) {
      console.log('Cancelled share');
    }
  }

  return (
    <View>

    </View>
  )
}

export default ShareModule