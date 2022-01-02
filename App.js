import React, {useState, useEffect} from 'react'
import AppLoading from 'expo-app-loading'
import {Provider} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'
import * as ScreenOrientation from 'expo-screen-orientation'
import store from './src/store'
//Components
import {OfflineNotice} from './src/components'
import AppIntroSlider from './app-intro-slider'
import Toast from 'react-native-toast-message'
import AuthNavigator from './src/navigation/AuthNavigator'
import MainNavigator from './src/navigation/MainNavigator'
import Navigation from './src/navigation'
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
import {StaticContext} from './src/contexts'
import {
  getBestSeller_API,
  getPopularCategories_API,
  getCategories_API,
  getPromo_API,
} from './src/services/products'
import {useAPI} from './src/hooks'

export default function App() {
  const [openApp, setOpenApp] = useState(false)
  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)

  const bestSellerProducts = useAPI(getBestSeller_API)
  const promoProducts = useAPI(getPromo_API)
  const popularCategories = useAPI(getPopularCategories_API)
  const allCategories = useAPI(getCategories_API)

  useEffect(() => {
    lockOrientation()
  }, [])

  const lockOrientation = async () => {
    const locked = await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP,
    )
    return locked
  }

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
    // const user = await authStorage.getUser()
    // if (user) setUser(user)
  }

  if (!isReady || !fontsLoaded)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    )
  else {
    return (
      <AuthContext.Provider value={{user, setUser}}>
        <StaticContext.Provider
          value={{
            bestSellerProducts,
            popularCategories,
            allCategories,
            promoProducts,
          }}>
          <Provider store={store}>
            <OfflineNotice />
            <Navigation user={user} />
            <Toast ref={(ref) => Toast.setRef(ref)} />
          </Provider>
        </StaticContext.Provider>
      </AuthContext.Provider>
    )
  }

  // if (user) {
  //   return (
  //     <AuthContext.Provider value={{user, setUser}}>
  //       <Provider store={store}>
  //         <NavigationContainer>
  //           {user ? <MainNavigator /> : <AuthNavigator />}
  //         </NavigationContainer>
  //         <Toast ref={(ref) => Toast.setRef(ref)} />
  //       </Provider>
  //     </AuthContext.Provider>
  //   )
  // } else if (openApp) {
  //   return (
  //     <AuthContext.Provider value={{user, setUser}}>
  //       <Provider store={store}>
  //         <NavigationContainer>
  //           {user ? <MainNavigator /> : <AuthNavigator />}
  //         </NavigationContainer>
  //         <Toast ref={(ref) => Toast.setRef(ref)} />
  //       </Provider>
  //     </AuthContext.Provider>
  //   )
  // } else {
  //   return <AppIntroSlider openApp={() => setOpenApp(true)} />
  // }
}
