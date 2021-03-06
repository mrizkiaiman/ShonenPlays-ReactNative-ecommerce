import React from 'react'
import {View, Text} from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'
import {tailwind} from '../../style/tailwind'

export default () => {
  return (
    <AnimatedLoader
      visible={true}
      source={require('../../assets/Loading.json')}
      speed={1}
      animationStyle={{
        width: 380,
        height: 380,
        marginBottom: -140,
        marginTop: -40,
      }}>
      <Text
        style={{
          ...tailwind('font-bold text-2xl text-white'),
        }}>
        Loading. . .
      </Text>
    </AnimatedLoader>
  )
}
