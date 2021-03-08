import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
//Components
import SignIn from '../screens/Sign-In'
import SignUp from '../screens/Sign-Up'
import MainNavigator from './MainNavigator'

const AuthNavgigator = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'SignIn'}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      {MainNavigator}
    </Stack.Navigator>
  )
}

export default AuthNavgigator
