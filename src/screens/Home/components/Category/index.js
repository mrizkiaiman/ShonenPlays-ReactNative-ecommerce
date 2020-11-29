import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
//Styling
import {Colors, Size, Fonts, Buttons} from '../../../../style'
const {width, height} = Size
//Assets
//Components
//Functions

export default ({name, image}) => {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={image} />
      <Text style={styles.nameText}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    width: 130,
    height: 200,
    marginVertical: 4,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.44,
  },
  image: {
    width: 110,
    height: 130,
    marginVertical: 20,
    resizeMode: 'contain',
  },
  nameText: {
    ...Fonts.H2,
    fontSize: 13,
    paddingBottom: 10,
  },
})
