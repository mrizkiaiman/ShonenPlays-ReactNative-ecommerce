import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
//Styling
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Functions
import IDRFormat from '../../utils/IDRFormat'

export default ({product, customStyle}) => {
  const styles = StyleSheet.create({
    mainContainer: {
      ...tailwind(
        'light-shadow bg-white rounded-xl mb-4 justify-center items-center',
      ),
      height: 270,
      width: width > 410 ? 165 : 150,
      ...customStyle,
    },
    contentContainer: tailwind('mx-2'),
    productImage: {
      width: 140,
      height: 180,
      borderRadius: 8,
    },
    productText: {
      ...tailwind('font-normal text-xs mt-2'),
      width: 140,
    },
    priceProductText: tailwind('font-normal font-semibold text-xs mt-2'),
  })

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Image style={styles.productImage} source={{uri: product.img}} />
        <Text style={styles.productText}>{product.name}</Text>
        <Text style={styles.priceProductText}>
          Rp. {IDRFormat(product.price)}
        </Text>
      </View>
    </View>
  )
}

// status,
// _id,
// name,
// description,
// img,
// stock,
// price,
// weight,
// category
