
import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { AuthContext } from './hooks/AuthContext'

const Index = () => {
  const { isAuthenticated, checkAuth } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const verifyAuth = async () => {
      try {
        await checkAuth()
      } catch (error) {
        console.error('Error verifying authentication:', error)
      } finally {
        setLoading(false)
        SplashScreen.hideAsync() // Hide splash screen once authentication is checked
      }
    }

    // Show splash screen while checking authentication
    SplashScreen.preventAutoHideAsync()
    verifyAuth()
  }, [])

  if (loading) {
    return null // Optionally render a loading spinner or keep splash screen visible
  }

  return isAuthenticated ? (
    <Redirect href='/home' />
  ) : (
    <Redirect href='/SignInScreen' />
  )
}

export default Index
