import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from '@firebase/auth'
import {auth, firestore} from '@/api/firebaseConfig'
import {doc, setDoc} from '@firebase/firestore'


export const register = async (email: string, password: string, username: string) => {
  const userGegevens = await createUserWithEmailAndPassword(auth, email, password)
  const user = userGegevens.user

  await updateProfile(user, {displayName: username})
  console.log(user)

  await setDoc(doc(firestore, "users", user.uid), {
    email: email,
    displayName: username,
  })

  // test - abcdefg
  return user
}

export const login = async (email: string, password: string) => {
  const userGegevens = await signInWithEmailAndPassword(auth, email, password)
  return userGegevens.user
}