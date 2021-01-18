import React from 'react'
import {Text, View} from 'react-native'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Assets
//Components
import {Product} from './components'
//Functions

export default ({navigation, route}) => {
  const {
    params: {order},
  } = route

  const headerInformationList = [
    {
      title: 'Status',
      value: 'Completed',
    },
    {
      title: 'Purchasing Date',
      value: '16 Jan 2021',
    },
    {
      title: 'Order ID',
      value: order.id_order,
    },
  ]

  const HeaderInformation = ({title, value}) => (
    <View style={styles.headerInformationContainer}>
      <Text style={tailwind('font-normal')}>{title}</Text>
      <Text style={tailwind('font-normal font-semibold text-dgray')}>
        {value}
      </Text>
    </View>
  )

  return (
    <View style={styles.mainContainer}>
      <View style={tailwind('mt-2')}>
        {headerInformationList.map((info, index) => (
          <HeaderInformation key={index} {...info} />
        ))}
      </View>
      <View style={tailwind('mt-2 p-4 bg-white')}>
        <Text style={tailwind('font-normal font-semibold mb-6')}>Products</Text>
        {order.products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </View>
      <View style={tailwind('mt-2 p-4 bg-white')}>
        <Text style={tailwind('font-normal font-semibold mb-6')}>
          Shipping Address
        </Text>
      </View>
      <View style={tailwind('mt-2 p-4 bg-white')}>
        <Text style={tailwind('font-normal font-semibold mb-6')}>
          Shipping Details
        </Text>
      </View>
    </View>
  )
}
