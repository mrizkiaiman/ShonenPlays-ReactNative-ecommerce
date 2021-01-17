import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
//Styling
import {Size} from '../../../../style'
import {tailwind} from '../../../../style/tailwind'
const {width, height} = Size
//Assets
//Components
//Functions
import IDRFormat from '../../../../utils/IDRFormat'

export default ({productData}) => {
  const {
    qty,
    product: {status, _id, name, description, img, stock, price, weight},
  } = productData

  return (
    <View style={styles.mainContainer}>
      <Image source={{uri: img}} style={styles.image} />
      <View style={tailwind('ml-4 justify-between')}>
        <Text style={tailwind('font-normal font-semibold mb-4')}>{name}</Text>
        <View>
          <Text style={tailwind('font-normal text-dgray text-xs mb-1')}>
            {qty} x Rp{IDRFormat(price)}
          </Text>
          <Text style={tailwind('font-normal font-semibold text-dgray mb-1')}>
            Rp{IDRFormat(qty * price)}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: tailwind('flex-row mb-5'),
  image: {
    width: 70,
    height: 90,
    borderRadius: 5,
  },
})
