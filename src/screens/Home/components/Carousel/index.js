import React, {useState} from 'react'
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native'
import Carousel, {Pagination} from 'react-native-snap-carousel'
//Styling
import {tailwind} from '../../../../style/tailwind'
import {Size, Colors} from '../../../../style'
const {width, height} = Size

const styles = StyleSheet.create({
  mainContainer: {
    width,
    ...tailwind('items-center justify-center'),
  },
  image: {
    height: 200,
    width: width * 0.9,
    ...tailwind('rounded-lg'),
  },
  spinner: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...tailwind('items-center justify-center'),
  },
})

export default () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const images = [
    // require('../../../../assets/Carousel/carousel-1.png'),
    require('../../../../assets/Carousel/carousel-3.jpg'),
    require('../../../../assets/Carousel/carousel-4.jpg'),
    require('../../../../assets/Carousel/carousel-2.jpg'),
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
      />
      <Pagination
        style={{height: 200}}
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        dotStyle={tailwind('w-2 h-2 rounded bg-dgreen')}
      />
    </View>
  )
}
