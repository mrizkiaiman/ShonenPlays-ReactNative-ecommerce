import React from 'react'
import {Text, View, ScrollView} from 'react-native'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Assets
//Components
import {Product, ShippingAddress, OrderSummary} from './components'
//Functions
import IDRFormat from '../../utils/IDRFormat'

export default ({navigation, route}) => {
  const {
    params: {order},
  } = route

  const {
    products,
    shippingAddress,
    shippingMethod,
    total,
    discount,
    id_order,
  } = order

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
      value: id_order,
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
    <>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={tailwind('mt-2')}>
            {headerInformationList.map((info, index) => (
              <HeaderInformation key={index} {...info} />
            ))}
          </View>
          <View style={tailwind('mt-2 p-4 bg-white')}>
            <Text style={tailwind('font-normal font-semibold mb-6')}>
              Products
            </Text>
            {products.map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </View>
          <View style={tailwind('mt-2 p-4 bg-white')}>
            <Text style={tailwind('font-normal font-semibold mb-6')}>
              Shipping Address
            </Text>
            <ShippingAddress shippingAddress={shippingAddress} />
          </View>
          <View style={tailwind('mt-2 p-4 bg-white')}>
            <Text style={tailwind('font-normal font-semibold mb-6')}>
              Shipping Method
            </Text>
            <Text style={tailwind('font-normal font-semibold mb-2')}>
              {shippingMethod.name}
            </Text>
            <Text
              style={tailwind('font-normal font-semibold text-dgray text-sm')}>
              Rp{IDRFormat(shippingMethod.price)}
            </Text>
          </View>
          <View style={tailwind('mt-2 p-4 bg-white mb-8')}>
            <Text style={tailwind('font-normal font-semibold mb-6')}>
              Order Summary
            </Text>
            <OrderSummary
              costData={{
                shipping: shippingMethod.price,
                total,
                discount,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  )
}
