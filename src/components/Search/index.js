import React, {useState} from 'react'
import {StyleSheet, TextInput, View} from 'react-native'
//Styling
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Assets
import SearchIcon from '../../assets/Icons/search-gray.svg'
//Components
//Functions

export default ({keyword, setKeyword, onSubmit}) => {
  return (
    <View style={styles.mainContainer}>
      <SearchIcon style={{marginHorizontal: 15}} />
      <TextInput
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Type something"
        autoCapitalize="none"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    ...tailwind('bg-white h-10 flex-row items-center self-center mt-3'),
    width: width * 0.88,
    borderRadius: 10,
  },
})
