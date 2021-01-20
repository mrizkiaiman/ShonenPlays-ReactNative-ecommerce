import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
//Styling
import {Size, Buttons} from '../../../../style'
import {tailwind} from '../../../../style/tailwind'
const {width, height} = Size
//Assets
import TrashIcon from '../../../../assets/Icons/trash.svg'
//Components
//Functions
import {IDRFormat} from '../../../../utils'

export default ({productData}) => {
  const {name, img, price} = productData
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={{uri: img}} />
      <View style={{...tailwind('ml-4 justify-between'), height: 110}}>
        <View>
          <Text style={tailwind('font-normal font-semibold mb-2')}>{name}</Text>
          <Text style={tailwind('font-normal font-semibold text-dgray')}>
            Rp{IDRFormat(price)}
          </Text>
          <View style={tailwind('flex-row items-center mt-7')}>
            <TouchableOpacity style={styles.deleteButton}>
              <TrashIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={tailwind('font-normal font-semibold text-white')}>
                Add to cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: tailwind('flex-row bg-white p-4 rounded-lg light-shadow mb-5'),
  image: {
    width: 80,
    height: 110,
    borderRadius: 5,
  },
  addToCartButton: {
    ...tailwind('bg-dgreen flex-row items-center justify-center rounded px-12'),
    height: 40,
  },
  deleteButton: {
    ...Buttons.whiteBorderedSubmitButton,
    height: 40,
    width: 40,
    marginRight: 12,
  },
})
