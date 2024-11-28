let key = "" // variabele voor de api_key aanmaken

export const getApiKey = async () => {
  const clientId = "cba5151df6664a6bad0e4a5385ee6ba3"; // clientId van het project
  const clientSecret = "f39d3f39c74247b3a97f5ba937ee0adc"; // clientSecret van het project
  const tokenLink = "https://accounts.spotify.com/api/token" // url voor de token op te halen

  await fetch(tokenLink, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${btoa(clientId + ':' + clientSecret)}`,
    },
    body: new URLSearchParams({ grant_type: 'client_credentials' }).toString(),
  })
    .then(res => res.json())
    .then(json => {
      console.log(json.access_token) // api_key loggen
      key = json.access_token // key gelijkstellen aan de access_token
    })
}

export const getTodayTopSongs = async () => {
  const playlistId = "37i9dQZF1DXcBWIGoYBM5M"
  const url = `https://api.spotify.com/v1/playlists/${playlistId}`

  await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${key}`, // door key een globale variabele te maken, kan deze hier gebruikt worden
    }
  })
    .then(res => res.json())
    .then(json => {
      console.log(json.tracks.items)
    })
}
