import React from 'react'
import {View, StyleSheet, TextInput} from 'react-native'
//Assets
import SearchIcon from '../../../../assets/Icons/search.svg'
//Styling
import {tailwind} from '../../../../style/tailwind'
import {Size} from '../../../../style'

export default function SearchBar({customStyle}) {
  const {width} = Size
  const styles = StyleSheet.create({
    mainContainer: {
      ...tailwind('w-full flex-row rounded p-4'),
      width: width * 0.9,
      backgroundColor: '#038287',
      opacity: 0.8,
      ...customStyle.container,
    },
    textInput: {
      color: 'white',
      ...customStyle.text,
    },
  })

  return (
    <View style={styles.mainContainer}>
      <SearchIcon style={{marginRight: 10}} />
      <TextInput
        style={styles.textInput}
        placeholder={'Search'}
        placeholderTextColor={'white'}
      />
    </View>
  )
}

// customStyle: {
//   container: {},
//   text: {}
// }
