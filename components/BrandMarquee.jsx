import {
  View,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Animated, Easing } from 'react-native'


const { width } = Dimensions.get('window')

const BrandMarquee = ({ logos }) => {
  const scrollX = useRef(new Animated.Value(0)).current
  const scrollViewWidth = logos.length * 120 // 100 logo + 20 gap
  const totalScroll = scrollViewWidth

 useEffect(() => {
    const loopScroll = () => {
      scrollX.setValue(0)
      Animated.timing(scrollX, {
        toValue: totalScroll,
        duration: logos.length * 1000 * 2,
        useNativeDriver: true,
        easing: Easing.linear 
      }).start(() => loopScroll())
    }

    loopScroll()
  }, [])

  return (
    <View style={{ overflow: 'hidden', height: 60 }}>
      <Animated.View
        style={{
          flexDirection: 'row',
          transform: [{ translateX: scrollX.interpolate({
            inputRange: [0, totalScroll],
            outputRange: [0, -totalScroll]
          }) }]
        }}
      >
        {/* Duplicate logos for seamless looping */}
        {[...logos, ...logos].map((logo, index) => (
          <Image
            key={index}
            source={logo}
            style={{
              width: 100,
              height: 50,
              resizeMode: 'contain',
              marginRight: 20
            }}
          />
        ))}
      </Animated.View>
    </View>
  )
}

export default BrandMarquee
