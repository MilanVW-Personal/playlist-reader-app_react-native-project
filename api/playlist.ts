import {firestore} from '@/api/firebaseConfig'
import {doc, serverTimestamp, setDoc} from '@firebase/firestore'

export const createPlaylist = async (name: string, description: string, userId?: string) => {
  await setDoc(doc(firestore, 'playlists'), {
    name: name,
    description: description,
    createdAt: serverTimestamp(),
    createdBy: userId,
    songs: [],
  })
}
//
// export const getPlaylists = async (userId: string) => {
//   const playlists = await getDoc(doc(firestore, "playlists", userId)) // alle playlists van een user ophalen
//   if (playlists.exists())
//     console.log(playlists.data(), userId)
// }
//
// export const updatePlaylist = async (id: string, name: string, description: string) => {
//   await updateDoc(doc(firestore, "playlists", id) ,{
//     name: name,
//     description: description
//   })
// }
//
// export const deletePlaylist = async (id: string) => {
//   await deleteDoc(doc(firestore, "playlists", id))
// }