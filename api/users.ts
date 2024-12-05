import {IUser} from '@/models/IUser'

const users : IUser[] = []

export const loginUser = (username: string, password: string) => {
  const foundUser = users.find((user: IUser) => user.username === username)
  
  if (!foundUser)
    return alert("This username doesn't exist! Please create a new account.")

  if (foundUser.password !== password)
    return alert("Incorrect password!")

  return foundUser
}

export const createNewAccount = (email: string, username: string, password: string) => {
  if (users.some((user: IUser) => user.username === username))
    return alert("This username already exist! Please log-in instead.")

  if (users.some((user: IUser) => user.email === email))
    return alert("This email already exist! Please log-in instead.")

  users.push({username: username, email: email, password: password})
  return true
}