
import React, { useState, useEffect } from 'react'
import { AppState, View, StyleSheet } from 'react-native'
import AuthProvider from './hooks/AuthContext'
import { DataContext } from './hooks/DataContext' // Ensure this import is correct
import { Stack } from 'expo-router'
import SplashScreen from '../components/SplashScreen'

const RootLayout = () => {

  
  const [appState, setAppState] = useState(AppState.currentState)
  const [showSplash, setShowSplash] = useState(false)

  useEffect(() => {
    const handleAppStateChange = nextAppState => {
      if (appState.match(/inactive|background/) && nextAppState === 'active') {
        // App is coming back to the foreground
        setShowSplash(true)
        setTimeout(() => {
          setShowSplash(false) // Hide splash screen after 3 seconds
        }, 2000)
      }
      setAppState(nextAppState)
    }

    // Add event listener for app state changes
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange
    )

    // Cleanup function to remove the event listener
    return () => {
      subscription.remove()
    }
  }, [appState])

  return (
    <AuthProvider>
      <DataContext>
        {showSplash ? (
          <SplashScreen />
        ) : (
          <Stack>
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
            <Stack.Screen name='(auth)' options={{ headerShown: false }} />
            <Stack.Screen name='index' options={{ headerShown: false }} />
          </Stack>
        )}
      </DataContext>
    </AuthProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    ,backgroundColor:'#121212'
  }
})

export default RootLayout
