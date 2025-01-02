import { ITrack } from "@/models/ITrack";

const tracks: ITrack[] = []
let apiKey = ""

// Deze functie zal de API-key ophalen en de data uitlezen in de console.
// Als de component, die bij opstarten ingeladen wordt, geladen is, dan zal deze functie opgeroepen worden.
export const getApiKeyAndShowData = async (): Promise<ITrack[]> => {
  const clientId = "cba5151df6664a6bad0e4a5385ee6ba3"; // clientId van het project
  const clientSecret = "f39d3f39c74247b3a97f5ba937ee0adc"; // clientSecret van het project
  const tokenLink = "https://accounts.spotify.com/api/token" // url voor de token op te halen

  await fetch(tokenLink, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${btoa(clientId + ':' + clientSecret)}`,
    },
    body: "grant_type=client_credentials"

  })
  .then(resp => resp.json())
  .then(json => {
      // console.log(json.access_token)
      apiKey = json.access_token;
  })

  return await getTodayTopSongs(apiKey) // door de functie hier meteen op te roepen, zal de data gefetched worden en getoond worden in de console. Elders zal die de link niet vinden.
}



// Functie om songs op te halen (voorlopig playlist die effectief wilt werken (Non Stop FM (GTA V) Songs)
const getTodayTopSongs = async (api_key: string) : Promise<ITrack[]> => {
  const playlistId = "0dtfWpzj3tg2bA2a10USa0"
  const url = `https://api.spotify.com/v1/playlists/${playlistId}`

  await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${api_key}`, // door key een globale variabele te maken, kan deze hier gebruikt worden
    }
  })
  .then(resp => {
    if (resp.ok){
      // console.log(resp.ok)
      return resp.json()
    }
  })
  .then(json => {
    if (json != undefined)
    {
      console.log("Fetched!") // Log om te kijken of de code al dan niet deze if bereikt.
      // console.log(json.tracks.items)
      json.tracks.items.map(((track, i) => {
        tracks.push({
          id: track.track.album.id,
          title: track.track.name,
          artists: track.track.artists,
          duration: track.track.duration_ms,
          imageUrl: track.track.album.images[0].url,
          popularity: track.track.popularity,
          explicit: track.track.explicit,
          currentPosition: i + 1,
          webURL: track.track.external_urls.spotify,
        })
      }))

      // console.log(tracks)
    }
    else
      console.log("Couldn't fetch playlist's data!")
  })
  return tracks
}

export const getTrackDetails = (id: string) => {
  const trackDetail = tracks.find((track) => track.id === id)
  return trackDetail
  // console.log(fetchedTrack)
}