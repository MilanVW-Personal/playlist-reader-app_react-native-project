import {firestore} from '@/api/firebaseConfig'
import {
  collection,
  doc,
  query,
  serverTimestamp,
  setDoc,
  where,
  getDocs,
  deleteDoc,
  updateDoc, arrayUnion, arrayRemove,
} from '@firebase/firestore'
import {IPlaylist} from '@/models/IPlaylist'

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
  // console.log("Key:", snapshot.docs.map((doc) => doc.id))
  const foundPlaylists = snapshot.docs.map(doc => ({
    ...doc.data() as IPlaylist,
    id: doc.id,
  }))

  // console.log("Met id: ", foundPlaylists)
  return foundPlaylists as IPlaylist[]
}

// export const updatePlaylist = async (id: string, name: string, description: string) => {
//   await updateDoc(doc(firestore, "playlists", id) ,{
//     name: name,
//     description: description
//   })
// }
//

export const deletePlaylist = async (id: string) => {
  console.log("delete")
  console.log(id)
  return await deleteDoc(doc(firestore, "playlists", id))
}

export const addSongToPlaylist = async (id: string, songId: string) => {
  const ref = doc(firestore, "playlists", id); // database ophalen met de playlistId
  await updateDoc(ref, {
    songs: arrayUnion(songId), // arrayUnion() zal hier items aan de array toevoegen, zonder deze te overschrijven
  })

  console.log("added: ", ref)
}

export const removeSongFromPlaylist = async (id: string, songId: string) => {
  const ref = doc(firestore, "playlists", id); // database ophalen met de playlistId
  await updateDoc(ref, {
    songs: arrayRemove(songId), // arrayRemove() zal een item verwijderen uit de songs.
  })
}