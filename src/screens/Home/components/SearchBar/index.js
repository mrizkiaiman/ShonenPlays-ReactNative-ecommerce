import React from 'react'
import {TouchableOpacity, StyleSheet, TextInput} from 'react-native'
import {useNavigation} from '@react-navigation/native'
//Assets
import SearchIcon from '../../../../assets/Icons/search.svg'
//Styling
import {tailwind} from '../../../../style/tailwind'
import {Size} from '../../../../style'

export default function SearchBar({
  customStyle,
  searchKeyword,
  setSearchKeyword,
  onSubmit,
}) {
  const {width} = Size
  const styles = StyleSheet.create({
    mainContainer: {
      ...tailwind('w-full flex-row rounded p-4'),
      // width: width * 0.9,
      backgroundColor: '#038287',
      opacity: 0.8,
      ...customStyle.container,
    },
    textInput: {
      color: 'white',
      marginStart: 10,
      ...customStyle.text,
    },
  })

  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Search')}
      style={styles.mainContainer}>
      <TextInput
        value={searchKeyword}
        onChangeText={setSearchKeyword}
        style={styles.textInput}
        placeholder={'Search'}
        placeholderTextColor={'white'}
        editable={false}
      />
    </TouchableOpacity>
  )
}

// customStyle: {
//   container: {},
//   text: {}
// }
