import {IUser} from '@/models/IUser'

const users : IUser[] = []

export const loginUser = (username: string, password: string) => {
  const foundUser = users.find((user: IUser) => user.username === username)
  
  if (!foundUser)
    return alert("This username doesn't exist!")

  if (foundUser.password !== password)
    return alert("Incorrect password!")

  return foundUser
}

export const createNewAccount = (email: string, username: string, password: string) => {
  if (users.length > 0) {
    users.forEach((user: IUser) => {
      if (user.username === username) {
        alert("This username is already taken.")
      }

      if (user.email === email) {
        alert("This email is already in use.") // later eventueel veranderen naar de mogelijkheid om meerdere accounts per email te hebben
      }
    })
  }

  return users.push({username: username, email: email, password: password})
}