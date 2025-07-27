
import React, { useContext, useState, useEffect } from 'react'
import { Redirect, Stack } from 'expo-router'
import { AuthContext } from '../hooks/AuthContext'
import { StyleSheet, Text, View } from 'react-native'

const AuthLayout = () => {

  
  const { isAuthenticated } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  

  if (isAuthenticated) return <Redirect href='/instock' />

  return (
    <>
      <Stack>
        <Stack.Screen
          name='SignInScreen'
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='SignUpScreen'
          options={{
            headerShown: false
          }}
        />
       
      </Stack>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default AuthLayout
