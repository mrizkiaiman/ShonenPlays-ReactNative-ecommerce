import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
//Styling
import {Size} from '../../../../style'
import {tailwind} from '../../../../style/tailwind'
const {width, height} = Size
//Assets
//Components
import {SvgUri} from 'react-native-svg'
//Functions

export default ({name, icon}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>
        <SvgUri width={50} height={50} uri={icon} />
      </View>
      <Text style={styles.nameText}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 140,
    ...tailwind('justify-center items-center m-1'),
  },
  iconContainer: {
    ...tailwind(
      'justify-center items-center bg-white light-shadow rounded-lg mb-2',
    ),
    height: 90,
    width: 90,
  },
  nameText: tailwind('font-normal font-semibold text-center text-xs'),
})
