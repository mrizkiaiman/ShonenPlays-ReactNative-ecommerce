import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
//Styling
import {tailwind} from '../../../../style/tailwind'
import {Colors, Size, Fonts, Buttons} from '../../../../style'
const {width, height} = Size

export default ({name, popularIcon}) => {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={{uri: popularIcon}} />
      <Text style={styles.nameText}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    ...tailwind(
      'justify-center items-center bg-white rounded-lg my-1 mr-5 light-shadow',
    ),
    width: 130,
    height: 200,
  },
  image: {
    width: 110,
    height: 130,
    marginVertical: 20,
    resizeMode: 'contain',
  },
  nameText: tailwind('font-H2 text-sm pb-2'),
})
