import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
//Components
import BottomTabs from './components/BottomTabs'
import SignIn from '../screens/Sign-In'
import SignUp from '../screens/Sign-Up'
import Categories from '../screens/Categories'
import ProductListByCategory from '../screens/ProductListByCategory'
import ProductDetails from '../screens/ProductDetails'

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
        <Stack.Screen
          name="ProductListByCategory"
          component={ProductListByCategory}
          options={{headerShown: true}}
          options={({route}) => ({
            headerShown: true,
            title: route.params.category.name,
          })}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{headerShown: true}}
          options={({route}) => ({
            headerShown: true,
            title: route.params.product.name,
          })}
        />
        {/* Authenthication */}
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
