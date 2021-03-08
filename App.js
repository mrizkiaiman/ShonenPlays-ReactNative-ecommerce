import React, {useState} from 'react'
import {AppLoading} from 'expo'
import {Provider} from 'react-redux'
import store from './src/store'
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
//Functions
import AuthContext from './src/auth/context'
import authStorage from './src/auth/storage'

export default function App() {
  const [openApp, setOpenApp] = useState(false)
  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)

  let [fontsLoaded] = useFonts({
    Oxanium_200ExtraLight,
    Oxanium_300Light,
    Oxanium_400Regular,
    Oxanium_500Medium,
    Oxanium_600SemiBold,
    Oxanium_700Bold,
    Oxanium_800ExtraBold,
  })

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    if (user) setUser(user)
  }

  if (!isReady || !fontsLoaded)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    )
  else if (openApp) {
    return (
      <AuthContext.Provider value={{user, setUser}}>
        <Provider store={store}>
          {user ? <MainNavigator /> : <AuthNavigator />}
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </Provider>
      </AuthContext.Provider>
    )
  } else {
    return <AppIntroSlider openApp={() => setOpenApp(true)} />
  }

  if (!fontsLoaded) return <AppLoading />
  else {
    return (
      <Provider store={store}>
        {user ? <MainNavigator /> : <AuthNavigator />}
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </Provider>
    )
  }
}
