import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
//Components
import BottomTabs from './components/BottomTabs'
import Categories from '../screens/Categories'
import Products from '../screens/Products'
import ProductsByCategory from '../screens/ProductsByCategory'
import ProductDetails from '../screens/ProductDetails'
import Search from '../screens/Search'
import Checkout from '../screens/Checkout'
import OrderDetails from '../screens/OrderDetails'
//Authenthication
import SignIn from '../screens/Sign-In'
import SignUp from '../screens/Sign-Up'
//MoreMenu
import ShippingAddress from '../screens/Address'
import AddShippingAddress from '../screens/Address-add'
import EditShippingAddress from '../screens/Address-edit'
import Maps from '../screens/Address-maps'

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
          options={{title: 'Search', headerShown: true}}
          name="Search"
          component={Search}
        />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={({route}) => ({
            headerShown: true,
            title: `Results for ${route.params.keyword}`,
          })}
        />
        <Stack.Screen
          name="ProductsByCategory"
          component={ProductsByCategory}
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
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={({route}) => ({
            headerShown: true,
            title: 'Checkout Confirmation',
          })}
        />
        <Stack.Screen
          name="OrderDetails"
          component={OrderDetails}
          options={({route}) => ({
            headerShown: true,
            title: 'Order Details',
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
        <Stack.Screen
          name="AddShippingAddress"
          component={AddShippingAddress}
          options={() => ({
            headerShown: true,
            title: 'New Address',
          })}
        />
        <Stack.Screen
          name="EditShippingAddress"
          component={EditShippingAddress}
          options={() => ({
            headerShown: true,
            title: 'Edit Address',
          })}
        />
        <Stack.Screen
          name="Maps"
          component={Maps}
          options={() => ({
            headerShown: true,
            title: 'Maps',
          })}
        />
        {/* Authenthication */}
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
