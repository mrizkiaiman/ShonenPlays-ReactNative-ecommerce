import React, {useState} from 'react'
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native'
import Carousel, {Pagination} from 'react-native-snap-carousel'
//Styling
import {Size, Colors} from '../../../../style'
const {width, height} = Size

const styles = StyleSheet.create({
  mainContainer: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: height * 0.239,
    width: width * 0.881,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: Colors.gray,
  },
  spinner: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const images = [
    require('../../../../assets/Carousel/carousel-1.png'),
    require('../../../../assets/Carousel/carousel-2.jpg'),
    require('../../../../assets/Carousel/carousel-3.jpg'),
    require('../../../../assets/Carousel/carousel-4.jpg'),
  ]

  const _renderItem = ({item, index}) => {
    return <Image style={styles.image} source={item} />
  }

  return (
    <View style={styles.mainContainer}>
      <Carousel
        data={images}
        renderItem={_renderItem}
        sliderWidth={width * 1.2}
        itemWidth={width * 0.881}
        onSnapToItem={(index) => setActiveSlide(index)}
        autoplay={true}
        layout={'default'}
        loop={true}
      />
      <Pagination
        style={{height: 200}}
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: '#0a3d62',
        }}
      />
    </View>
  )
}
