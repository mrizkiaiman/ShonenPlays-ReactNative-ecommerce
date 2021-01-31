import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import moment from 'moment'
//Styling
import {Size} from '../../../../style'
import {tailwind} from '../../../../style/tailwind'
const {width, height} = Size
//Assets
//Components
//Functions
import IDRFormat from '../../../../utils/IDRFormat'

export default ({product}) => {
  const {qty, img, description, name, price, status, stock, weight} = product

  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={{uri: img}} />
      <View style={tailwind('justify-between ml-4')}>
        <Text style={tailwind('font-normal font-semibold')}>{name}</Text>
        <View>
          <Text style={tailwind('font-normal text-sm text-dgray mb-1')}>
            {qty} Item
          </Text>
          <Text style={tailwind('font-normal font-semibold')}>
            Rp{IDRFormat(price)}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: tailwind('flex-row mb-6'),
  image: {
    width: 70,
    height: 90,
    borderRadius: 5,
  },
})
