import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
//Styling
import {tailwind} from '../../../../style/tailwind'

export default ({category}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductsByCategory', {category})}
      style={styles.mainContainer}>
      <Image style={styles.image} source={{uri: category.popularIcon}} />
      <Text style={styles.nameText}>{category.name}</Text>
    </TouchableOpacity>
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
