import React, {useState} from 'react'
import Navigation from './src/navigation'
import {AppLoading} from 'expo'
import {Provider} from 'react-redux'
import store from './src/store/index'
//Components
import AppIntroSlider from './app-intro-slider'

import Toast from 'react-native-toast-message'

//Fonts
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
  const [openApp, setOpenApp] = useState(false)
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
  else if (openApp) {
    return (
      <Provider store={store}>
        <Navigation />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </Provider>
    )
  } else {
    return <AppIntroSlider openApp={() => setOpenApp(true)} />
  }

  if (!fontsLoaded) return <AppLoading />
  else {
    return <Navigation />
  }
}
