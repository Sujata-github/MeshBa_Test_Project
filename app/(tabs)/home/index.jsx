
import React, { useEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'
import BrandMarquee from '../../../components/BrandMarquee'

const { width } = Dimensions.get('window')

const sliderImages = [
  { uri: 'https://images.unsplash.com/photo-1517649763962-0c623066013b' },
  { uri: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4' },
  { uri: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b' }
]

const categories = [
  {
    name: 'Sports',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b',
    content: [
      { uri: 'https://media.istockphoto.com/id/465383082/photo/female-swimmer-at-the-swimming-pool.webp?a=1&b=1&s=612x612&w=0&k=20&c=1Odsf60kiKQtvMrbGbTgQ7Wx4rea2-rEzEkNlzM8_Uk=' },
      { uri: 'https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNwb3J0cyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D' },
      { uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b' },
      { uri: 'https://images.unsplash.com/photo-1517649763962-0c623066013b' },
      { uri: 'https://media.istockphoto.com/id/154973930/photo/snowboarder.webp?a=1&b=1&s=612x612&w=0&k=20&c=XsiEeFepsGdbrGIAnkWB4xpi1PwNYhhGaJZ8sWvEdCM=' }
    ]
  },
  {
    name: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    content: [
      { uri: 'https://images.unsplash.com/photo-1615823489439-a2146cb67ed5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGlmZXN0eWxlJTIwaW1hZ2VzfGVufDB8fDB8fHww' },
      { uri: 'https://plus.unsplash.com/premium_photo-1698117059857-afdb96271acc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxpZmVzdHlsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D' },
      { uri: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85' },
      { uri: 'https://images.unsplash.com/photo-1642569126826-291d2a6dcc5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpZmVzdHlsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D' },
      { uri: 'https://images.unsplash.com/photo-1605985842833-2b23d48d8354?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxpZmVzdHlsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D' }
    ]
  },
  {
    name: 'Education',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b',
    content: [
      { uri: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b' },
      { uri: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc' },
      { uri: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b' },
      { uri: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b' },
      { uri: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d' }
    ]
  }
]


const brands = [
  { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png' },
  { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/512px-Facebook_Logo_%282019%29.png' },
  { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/512px-Apple_logo_black.svg.png' },
  { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png' },
  { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/512px-Microsoft_logo_%282012%29.svg.png' },
  { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/512px-Instagram_logo_2016.svg.png' }
]



const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  const scrollRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)


  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % sliderImages.length
      scrollRef.current?.scrollTo({
        x: nextIndex * width,
        animated: true
      })
      setCurrentIndex(nextIndex)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const brandScrollRef = useRef()
  const [brandIndex, setBrandIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (brandIndex + 1) % brands.length

      brandScrollRef.current?.scrollTo({
        x: nextIndex * 110, // 100 width + 10 margin
        animated: true
      })

      setBrandIndex(nextIndex)
    }, 2000) // Scroll every 2 seconds

    return () => clearInterval(interval)
  }, [brandIndex])


  const onMomentumScrollEnd = (event) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width)
    setCurrentIndex(newIndex)
  }

  return (
    <SafeAreaView style={styles.container}>


      <ScrollView showsVerticalScrollIndicator={false}>

        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onMomentumScrollEnd={onMomentumScrollEnd}
          style={styles.sliderContainer}
        >
          {sliderImages.map((img, index) => (
            <Image key={index} source={img} style={styles.sliderImage} />
          ))}
        </ScrollView>

        {/* Dot Indicators */}
        <View style={styles.dotsContainer}>
          {sliderImages.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index && styles.activeDot
              ]}
            />
          ))}
        </View>
        {/* </View> */}

        <View style={{ paddingVertical: 10 }}>
          {/* Categories Heading */}
          <Text style={styles.sectionTitle}>Categories</Text>

          {/* Category Selector */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ paddingHorizontal: 8 }}
          >
            {categories.map((cat, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.categoryBlock}
                onPress={() => setSelectedCategory(cat)}
              >
                <Image source={{ uri: cat.image }} style={styles.categoryThumb} />
                <Text style={styles.categoryName}>{cat.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={{ paddingVertical: 8 }}>
          {/* Selected Category Section */}
          <Text style={styles.categoryTitle}>Popular in {selectedCategory.name}</Text>
          <FlatList
            horizontal
            style={{ paddingHorizontal: 8 }}
            data={selectedCategory.content}
            keyExtractor={(item, i) => i.toString()}
            renderItem={({ item }) => (
              <Image source={item} style={styles.categoryImage} />
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>


        <View style={{ paddingVertical: 8 }}>
          <Text style={styles.sectionTitle}>Our Partners</Text>

          <BrandMarquee logos={brands} />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10
  },
  topBar: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain'
  },

  sliderContainer: {
    width,
    height: 200
  },
  sliderImage: {
    width,
    height: 200,
    resizeMode: 'cover'
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4
  },
  activeDot: {
    backgroundColor: '#333'
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 16,
    marginLeft: 16,
    color: '#FAB400'
  },
  categoryBlock: {
    alignItems: 'center',
    marginHorizontal: 10
  },
  categoryThumb: {
    width: 100,
    height: 70,
    borderRadius: 8
  },
  categoryName: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '500'
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 16,
    marginVertical: 12, color: '#FBC740'
  },
  categoryImage: {
    width: 120,
    height: 80,
    borderRadius: 8,
    marginHorizontal: 8
  },
  brandGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 12
    // padding: 16
  },
  brandLogo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    // marginVertical: 8,
    marginRight: 10
  }
})
