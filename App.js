import React from 'react'
import Navigation from './src/navigation'
import {AppLoading} from 'expo'
import {
  useFonts,
  Oxanium_200ExtraLight,
  Oxanium_300Light,
  Oxanium_400Regular,
  Oxanium_500Medium,
  Oxanium_600SemiBold,
  Oxanium_700Bold,
  Oxanium_800ExtraBold,
} from '@expo-google-fonts/oxanium'

export default function App() {
  let [fontsLoaded] = useFonts({
    Oxanium_200ExtraLight,
    Oxanium_300Light,
    Oxanium_400Regular,
    Oxanium_500Medium,
    Oxanium_600SemiBold,
    Oxanium_700Bold,
    Oxanium_800ExtraBold,
  })
  if (!fontsLoaded) return <AppLoading />
  else return <Navigation />
}
