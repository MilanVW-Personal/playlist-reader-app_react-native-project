import {firestore} from '@/api/firebaseConfig'
import {collection, doc, query, serverTimestamp, setDoc, where, getDocs, deleteDoc} from '@firebase/firestore'
import {IPlaylist} from '@/models/IPlaylist'


// Logica klopt, maar er ergens iets dat er voor zorgt dat de collectie niet gemaakt wordt => later oplossen
export const createPlaylist = async (name: string, description: string, userId: string) => {
  const playlistId = userId + '-' + Date.now()
  console.log("setDoc")
  // Maak de collectie in de database
  await setDoc(doc(firestore, "playlists", playlistId), {
    title: name,
    description,
    userId,
    createdAt: serverTimestamp(),
    songs: []
  })

  return {playlistId, title: name, description, userId, createdAt: serverTimestamp(), songs: []}
}

export const getPlaylistsFromUser = async (userId: string) => {
  const ref = collection(firestore, "playlists"); // collectie playlists ophalen
  const q = query(ref, where("userId", "==", userId)); // query uitvoeren die de playlist van een user ophaalt
  const snapshot = await getDocs(q) // resultaten ophalen

  // Door de snapshot heen mappen en data er uit halen.
  const foundPlaylists: IPlaylist[] = snapshot.docs.map(doc => ({
    ...(doc.data() as IPlaylist)
  }))

  return foundPlaylists
}

// export const updatePlaylist = async (id: string, name: string, description: string) => {
//   await updateDoc(doc(firestore, "playlists", id) ,{
//     name: name,
//     description: description
//   })
// }
//
export const deletePlaylist = async (id: string) => {
  await deleteDoc(doc(firestore, "playlists", id))
}