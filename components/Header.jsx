// import React, { useContext, useEffect, useState } from 'react'
// import {
//   View,
//   Image,
//   StyleSheet,
//   Platform,
//   Text,
//   TouchableOpacity,
//   SafeAreaView
// } from 'react-native'
// import { icons } from '../constants'

// import { StatusBar } from 'expo-status-bar'


// const Header = () => {

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.headerContainer}>
//         <TouchableOpacity
        
//         >
//           <Text style={styles.title}>Catlog App</Text>
//         </TouchableOpacity>

//       </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     width: '100%',
//     backgroundColor: 'white',
//     height: 50,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//     zIndex: 1,
   
//   },
//   headerContainer: {
//     width: '100%',
//     height: 50,
//     backgroundColor: 'white',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//     zIndex: 1,
//     shadowOffset: { width: -2, height: 4 },
//     shadowColor: '#171717',
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 18,
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.8,
//         shadowRadius: 2
//       }
//     })
//   },
//   title: {
//     fontSize: 18,
//     // color:'#FFD700',
//     fontWeight: 'bold',
//     textAlign: 'center'
//   },
//   userbtn: {
//     // backgroundColor: '#ec2790',
//     // height: 30,
//     // borderRadius: 50
//   },
//   vbicon: {
//     width: 55,
//     height: 50
//   },
//   icon: {
//     height: 22,
//     width: 22
//   },
//   cartContainer: {
//     flexDirection: 'column',
//     alignItems: 'center'
//   },
//   cartIconContainer: {
//     position: 'relative',
//     alignItems: 'center'
//   },
//   badge: {
//     position: 'absolute',
//     top: -7,
//     right: -5,
//     backgroundColor: 'red',
//     borderRadius: 10,
//     width: 19,
//     height: 19,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   badgeText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 10
//   },
//   cartText: {
//     color: 'black',
//     fontWeight: 'bold',
//     marginTop: -5
//   },
//   wrapperContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: 18
//   },
//   goldPriceContainer: {
//     flexDirection: 'column',
//     alignItems: 'center'
//   },
//   goldPriceLabel: {
//     color: 'black',
//     fontSize: 10
//   },
//   goldPriceValue: {
//     fontWeight: 'bold',
//     fontSize: 12
//   }
// })

// export default Header
import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  SafeAreaView
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { icons } from '../constants'

const Header = ({ title = 'Home' }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        {/* Left side: Logo and Title */}
        <View style={styles.leftContainer}>
          <Image source={icons.logo} style={styles.logo} />
          <Text style={styles.title}>{title}</Text>
        </View>
        {/* Add buttons/icons on the right if needed */}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    width: '100%',
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    zIndex: 1
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    // elevation: 18,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2
      }
    })
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  logo: {
    width: 22,
    height: 32,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  }
})

export default Header
