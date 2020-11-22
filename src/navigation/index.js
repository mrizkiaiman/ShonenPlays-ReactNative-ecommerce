import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
//Components
import Welcome from '../screens/Welcome'
import SignIn from '../screens/Sign-In'

export default function navigation() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Welcome'}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
