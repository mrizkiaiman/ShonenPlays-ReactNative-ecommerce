import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
//Components
import BottomTabs from './components/BottomTabs'
import Categories from '../screens/Categories'
import ProductListByCategory from '../screens/ProductListByCategory'
import ProductDetails from '../screens/ProductDetails'
//Authenthication
import SignIn from '../screens/Sign-In'
import SignUp from '../screens/Sign-Up'
//MoreMenu
import ShippingAddress from '../screens/ShippingAddress'

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
          options={({route}) => ({
            headerShown: true,
            title: route.params.category.name,
          })}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={({route}) => ({
            headerShown: true,
            title: route.params.product.name,
          })}
        />
        {/* More Menu */}
        <Stack.Screen
          name="ShippingAddress"
          component={ShippingAddress}
          options={() => ({
            headerShown: true,
            title: 'Shipping Address',
          })}
        />
        {/* Authenthication */}
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
