import React from 'react'
import {View} from 'react-native'
import LottieView from 'lottie-react-native'

export default ({visible}) => {
  if (!visible) return null
  return (
    <LottieView
      source={require('../../assets/Loading.json')}
      autoplay={true}
      loop
    />
  )
}
