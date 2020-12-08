import React, {useState} from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'
//Styling
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Assets
//Components
//Functions

export default ({value, setValue}) => {
  const changeValue = (action) => {
    if (action === '+') {
      setValue((value) => value + 1)
    } else {
      if (value !== 1) {
        setValue((value) => value - 1)
      }
    }
  }

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => changeValue('-')}
        style={styles.controlContainer}>
        <Feather name="minus" size={32} color="#006266" />
      </TouchableOpacity>
      <Text style={styles.valueText}>{value}</Text>
      <TouchableOpacity
        onPress={() => changeValue('+')}
        style={styles.controlContainer}>
        <Feather name="plus" size={32} color="#006266" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    ...tailwind('flex-row items-center justify-center'),
  },
  controlContainer: {
    width: 70,
    height: 60,
    ...tailwind(
      'bg-white light-shadow rounded-xl justify-center items-center mx-10',
    ),
  },
  valueText: tailwind('font-semibold text-xl mt-1'),
})
