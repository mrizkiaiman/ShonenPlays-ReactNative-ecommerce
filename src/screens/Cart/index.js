import React, {useEffect, useState} from 'react'
import {Text, View, ScrollView} from 'react-native'
import styles from './style'
//Components
import TabScreenHeader from '../../parts/TabScreenHeader'
import Product from './components/Product'
import Button from '../../components/Button'
//Functions
import useFetchHandler from '../../hooks/useFetchHandler'
import IDRFormat from '../../utils/IDRFormat'

export default () => {
  const cartList = useFetchHandler({method: 'get', url: '/carts'}, true)

  return (
    <>
      <ScrollView style={styles.mainContainer}>
        <TabScreenHeader
          text={{
            greenText: 'Ca',
            orangeText: 'rt',
          }}
        />
        <View style={styles.productsContainer}>
          {cartList &&
            cartList.response &&
            cartList.response.products &&
            cartList.response.products.map((item, index) => (
              <Product key={item._id} productData={item} />
            ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.priceTotalText}>
            Rp{IDRFormat(Number(cartList.response.total))}
          </Text>
        </View>
        <Button
          title="Checkout"
          styling={{
            buttonStyle: styles.checkoutButton,
            textStyle: styles.checkoutButtonText,
          }}
        />
      </View>
    </>
  )
}
