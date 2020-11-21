import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
//Components
import Welcome from '../screens/Welcome'

export default function navigation() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'GetStarted'}>
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
