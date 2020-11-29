import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
//Styling
import {Size} from '../../../../style'
import {tailwind} from '../../../../style/tailwind'
const {width, height} = Size
//Assets
//Components
//Functions

export default ({name, icon}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.nameText}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 140,
    width: 80,
  },
  iconContainer: {
    ...tailwind(
      'justify-center items-center bg-white light-shadow rounded-lg mb-2',
    ),
    height: 75,
    width: 75,
  },
  nameText: tailwind('font-normal font-semibold text-center text-xs'),
})
