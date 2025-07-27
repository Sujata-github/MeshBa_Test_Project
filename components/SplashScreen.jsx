// SplashScreen.js
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import { icons } from '../constants'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={icons.logo} // Replace with your logo path
        style={styles.logo}
      />
      <ActivityIndicator size='large' color='#fff' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff' // Adjust splash screen background color
  },
  logo: {
    width: 50,
    height: 60,
    marginBottom: 20
  }
})

export default SplashScreen
