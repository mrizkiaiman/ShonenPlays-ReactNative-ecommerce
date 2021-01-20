import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
//Styling
import {Size} from '../../../../style'
import {tailwind} from '../../../../style/tailwind'
const {width, height} = Size
//Assets
//Components
//Functions
import {IDRFormat} from '../../../../utils'

export default ({productData}) => {
  const {name, img, price} = productData
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={{uri: img}} />
      <View style={tailwind('ml-4')}>
        <Text style={tailwind('font-normal font-semibold mb-2')}>{name}</Text>
        <Text style={tailwind('font-normal font-semibold text-dgray')}>
          Rp{IDRFormat(price)}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: tailwind('flex-row bg-white p-4 rounded-lg light-shadow mb-3'),
  image: {
    width: 70,
    height: 90,
    borderRadius: 5,
  },
})
