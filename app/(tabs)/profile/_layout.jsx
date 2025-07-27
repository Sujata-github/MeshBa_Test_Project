
import React from 'react'
import { Stack } from 'expo-router'

const ProfileLayOut = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        
      </Stack>
    </>
  )
}

export default ProfileLayOut
