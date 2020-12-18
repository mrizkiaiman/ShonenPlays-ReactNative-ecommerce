import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
//Styling
import {tailwind} from '../../style/tailwind'

export default ({text}) => {
  const {greenText, orangeText} = text
  return (
    <View style={styles.mainContainer}>
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>
          {greenText}
          <Text style={styles.bannerText_}>{orangeText}</Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {},
  bannerContainer: {
    ...tailwind('px-6 bg-white'),
    paddingTop: 70,
    paddingBottom: 30,
  },
  bannerText: tailwind('font-H2 text-5xl text-dgreen'),
  bannerText_: tailwind('font-H2 text-5xl text-orange'),
})
