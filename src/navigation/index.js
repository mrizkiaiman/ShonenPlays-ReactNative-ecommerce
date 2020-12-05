import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
//Components
import BottomTabs from './components/BottomTabs'
import SignIn from '../screens/Sign-In'
import SignUp from '../screens/Sign-Up'
import Categories from '../screens/Categories'

export default function navigation() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'SignIn'}>
        <Stack.Screen
          options={{title: 'Home'}}
          name="BottomTabs"
          component={BottomTabs}
        />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{headerShown: true}}
        />
        {/* Authenthication */}
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
