import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { createContext } from 'react'

const MyContext = createContext()

//React context for storing access token
const DataContext = ({ children }) => {
  
  const [token, setToken] = useState(() => {
    const token = AsyncStorage.getItem('encoded_token')
    return token
  })
  const states = {
    token,
    setToken,
   
  }
  return <MyContext.Provider value={states}>{children}</MyContext.Provider>
}

export { DataContext, MyContext }
// At the bottom of your file
export default () => null
