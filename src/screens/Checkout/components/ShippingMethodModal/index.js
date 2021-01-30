import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {Shipping} from '../../../../mockdata'
//Styling
import {Size} from '../../../../style'
import {tailwind} from '../../../../style/tailwind'
const {width, height} = Size
//Assets
//Components
//Functions

export default ({setShippingMethod}) => {
  return <View style={styles.mainContainer}></View>
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F8F9FA',
    height,
    paddingHorizontal: 16,
  },
  addressContainer: tailwind('my-4 bg-white p-4 light-shadow rounded-xl'),
})
