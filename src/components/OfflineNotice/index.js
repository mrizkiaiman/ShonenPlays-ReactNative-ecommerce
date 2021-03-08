import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {useNetInfo} from '@react-native-community/netinfo'
//Styling
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Assets
//Components
//Functions

export default () => {
  const netInfo = useNetInfo()
  console.log(netInfo)
  return (
    <View style={styles.mainContainer}>
      <Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    
  }
})