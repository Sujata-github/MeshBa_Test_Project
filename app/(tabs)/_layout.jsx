

import React, { useContext, useEffect, useState } from 'react'
import { Redirect, Tabs, useRouter, useSegments } from 'expo-router'
import { StyleSheet, View, Text, Image, StatusBar } from 'react-native'
import { AuthContext } from '../hooks/AuthContext'
import { icons } from '../../constants'
import Header from '../../components/Header' // Import your Header component
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SplashScreen from '../../components/SplashScreen'
import { Pressable } from 'react-native';


const TabIcon = ({ icon, name, focused }) => {
  const color = focused ? '#FFC123' : 'gray'

  return (
    <View style={styles.tabIconContainer}>
      <Image
        source={icon}
        resizeMode='contain'
        style={[styles.tabIconImage, { tintColor: color }]}
      />
      <Text
        style={[
          styles.tabIconText,
          { color, fontWeight: focused ? 'bold' : 'normal' }
        ]}
      >
        {name}
      </Text>
    </View>
  )
}

const TabLayout = () => {
  const { isAuthenticated, setIsAuthenticated, logout } =
    useContext(AuthContext)
  const [showSplash, setShowSplash] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const segments = useSegments()



  useEffect(() => {
    const handleNavigation = () => {
      if (showSplash) {
        // Set a timeout to hide the splash screen and navigate
        setTimeout(() => {
          setShowSplash(false)
        }, 3000) // Show splash screen for 3 seconds
      }
    }

    handleNavigation()
  }, [showSplash])

  // Function to trigger navigation and show splash screen
  const navigateWithSplash = path => {
    setShowSplash(true) // Show splash screen
    setTimeout(() => {
      router.push(path) // Navigate after 3 seconds
    }, 3000)
  }



  const noHeaderPaths = ['/SignInScreen', '/SignUpScreen']

  // Get the current path
  const currentPath = `/${segments.join('/')}`

const formatPathTitle = (path) => {
  if (!path || path === '/') return 'Home'
  const segments = path.split('/')
  const last = segments[segments.length - 1]
  return last.charAt(0).toUpperCase() + last.slice(1) // Capitalize
}


  if (showSplash) {
    return <SplashScreen /> // Display splash screen
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor='#ffffff' style='dark-content' />
      {!noHeaderPaths.includes(currentPath) && <Header title={formatPathTitle(currentPath)} />}

      <View style={styles.container}>
        <Tabs
          initialRouteName='home' // Set the initial route
          screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor: '#FFC123',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: {
              // borderTopWidth: 1,
              // height: 70

              height: 70,
              borderTopWidth: 0,
              // borderTopColor:'#333',
              elevation: 0, // Android
              shadowOpacity: 0, // iOS
            //  backgroundColor: '#000000'


            }

          }}

        >
          <Tabs.Screen
            name='home'
            options={{
              title: 'Home',
              headerShown: false,
              tabBarButton: (props) => (
                <Pressable {...props} android_ripple={null} />
              ),
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.home}
                  color={color}
                  name='Home'
                  focused={focused}
                />
              )
            }}
          />

          <Tabs.Screen
            name='explore'
            options={{
              title: 'Explore',
              headerShown: false,
              tabBarButton: (props) => (
                <Pressable {...props} android_ripple={null} />
              ),
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.explore}
                  color={color}
                  name='Explore'
                  focused={focused}
                />
              )
            }}
          />
          <Tabs.Screen
            name='search'
            options={{
              title: 'Search',
              headerShown: false,
              tabBarButton: (props) => (
                <Pressable {...props} android_ripple={null} />
              ),
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.search}
                  color={color}
                  name='Search'
                  focused={focused}
                />
              )
            }}
          />
          <Tabs.Screen
            name='profile'
            options={{
              title: 'Profile',
              headerShown: false,
              tabBarButton: (props) => (
                <Pressable {...props} android_ripple={null} />
              ),
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.profile}
                  color={color}
                  name='Profile'
                  focused={focused}
                />
              )
            }}
          />
        </Tabs>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
   backgroundColor: '#ffffff'
  },
  container: {
    flex: 1 // Ensure the container takes up full space
  },
  tabIconContainer: {
    marginTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,marginBottom:-3
  },
  tabIconImage: {
    width: 20,
    height: 22
  },
  tabIconText: {
    fontSize: 13
  },
  expirecontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default TabLayout
