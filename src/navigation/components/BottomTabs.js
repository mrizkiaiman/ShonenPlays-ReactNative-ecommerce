import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
//Components
import Home from '../../screens/Home'
import Market from '../../screens/Market'
import Cart from '../../screens/Cart'
import Orders from '../../screens/Orders'
import Profile from '../../screens/Profile'
//Assets - Inactive
import HomeIcon from '../../assets/Icons/BottomTabs/home.svg'
import MarketIcon from '../../assets/Icons/BottomTabs/market.svg'
import CartIcon from '../../assets/Icons/BottomTabs/cart.svg'
import OrdersIcon from '../../assets/Icons/BottomTabs/orders.svg'
import ProfileIcon from '../../assets/Icons/BottomTabs/profile.svg'
//Assets - Active
import ActiveHomeIcon from '../../assets/Icons/BottomTabs/ActiveIcons/home.svg'
import ActiveMarketIcon from '../../assets/Icons/BottomTabs/ActiveIcons/market.svg'
import ActiveCartIcon from '../../assets/Icons/BottomTabs/ActiveIcons/cart.svg'
import ActiveOrdersIcon from '../../assets/Icons/BottomTabs/ActiveIcons/orders.svg'
import ActiveProfileIcon from '../../assets/Icons/BottomTabs/ActiveIcons/profile.svg'

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ffb244',
        inactiveTintColor: '#777777',
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
        tabStyle: {
          marginTop: 10,
        },
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => {
            return focused ? <ActiveHomeIcon /> : <HomeIcon />
          },
        }}
        component={Home}
      />
      <Tab.Screen
        name="Market"
        options={{
          tabBarLabel: 'Market',
          tabBarIcon: ({color, size, focused}) => {
            return focused ? <ActiveMarketIcon /> : <MarketIcon />
          },
        }}
        component={Market}
      />
      <Tab.Screen
        name="Cart"
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size, focused}) => {
            return focused ? <ActiveCartIcon /> : <CartIcon />
          },
        }}
        component={Cart}
      />
      <Tab.Screen
        name="Orders"
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color, size, focused}) => {
            return focused ? <ActiveOrdersIcon /> : <OrdersIcon />
          },
        }}
        component={Orders}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size, focused}) => {
            return focused ? <ActiveProfileIcon /> : <ProfileIcon />
          },
        }}
        component={Profile}
      />
    </Tab.Navigator>
  )
}
