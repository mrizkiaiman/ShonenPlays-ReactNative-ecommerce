import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
//Components
import Home from '../../screens/Home'
import Market from '../../screens/Market'
import Cart from '../../screens/Cart'
import Orders from '../../screens/Orders'
import Profile from '../../screens/Profile'
//Assets - Inactive
import HomeIcon from '../../assets/Icons/BottomTabs/Home.svg'
import MarketIcon from '../../assets/Icons/BottomTabs/Market.svg'
import CartIcon from '../../assets/Icons/BottomTabs/Cart.svg'
import OrdersIcon from '../../assets/Icons/BottomTabs/Orders.svg'
import ProfileIcon from '../../assets/Icons/BottomTabs/Profile.svg'
//Assets - Active
import ActiveHomeIcon from '../../assets/Icons/BottomTabs/ActiveIcons/Home.svg'
import ActiveMarketIcon from '../../assets/Icons/BottomTabs/ActiveIcons/Market.svg'
import ActiveCartIcon from '../../assets/Icons/BottomTabs/ActiveIcons/Cart.svg'
import ActiveOrdersIcon from '../../assets/Icons/BottomTabs/ActiveIcons/Orders.svg'
import ActiveProfileIcon from '../../assets/Icons/BottomTabs/ActiveIcons/Profile.svg'

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ffb244',
        inactiveTintColor: '#777777',
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
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
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size, focused}) => {
            return focused ? <ActiveProfileIcon /> : <ProfileIcon />
          },
        }}
        component={Profile}
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
    </Tab.Navigator>
  )
}
