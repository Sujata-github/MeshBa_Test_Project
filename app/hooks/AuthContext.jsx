import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [authError, setAuthError] = useState('')


  

  // Function to check authentication status
  const checkAuth = async () => {
   
  }

  // Function to log in the user
  const login = async data => {
    try {
     
      setIsAuthenticated(true)
       router.replace('/instock')
    } catch (error) {
      console.error('Failed to log in:', error)
    }
  }

  // Function to log out the user
  const logout = async () => {
    try {
   
      router.replace('/SignInScreen')
      setIsAuthenticated(false)
    } catch (error) {
      console.error('Failed to log out:', error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        checkAuth,
        login,
        logout,
        setAuthError
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
