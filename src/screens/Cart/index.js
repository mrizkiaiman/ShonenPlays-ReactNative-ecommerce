import React, {useEffect, useState} from 'react'
import {Text, View, ScrollView} from 'react-native'
import {useSelector} from 'react-redux'
import styles from './style'
//Components
import {Product} from './components'
import {Button} from '../../components'
import {EmptyState, TabScreenHeader} from '../../parts'
//Functions
import useFetchHandler from '../../hooks/useFetchHandler'
import {IDRFormat} from '../../utils'
import {tailwind} from '../../style/tailwind'

export default ({navigation}) => {
  useFetchHandler({method: 'get', url: '/carts'}, true, 'cartRedux')
  const cartListFromRedux = useSelector((state) => state.cart.cart)
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
          {cartListFromRedux.length === 0 ? (
            <View style={tailwind('mt-10')}>
              <EmptyState
                onSubmit={() => navigation.navigate('Market')}
                screen="Cart"
                buttonText="Browse items"
              />
            </View>
          ) : (
            cartListFromRedux.products &&
            (cartListFromRedux.products.length > 0 ? (
              cartListFromRedux.products.map((item, index) => (
                <Product key={item._id} productData={item} />
              ))
            ) : (
              <View style={tailwind('mt-10')}>
                <EmptyState
                  onSubmit={() => navigation.navigate('Market')}
                  screen="Cart"
                  buttonText="Browse items"
                />
              </View>
            ))
          )}
        </View>
      </ScrollView>
      {cartListFromRedux &&
        cartListFromRedux.products &&
        cartListFromRedux.products.length > 0 && (
          <View style={styles.footer}>
            <View>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.priceTotalText}>
                Rp{IDRFormat(Number(cartListFromRedux.total))}
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
        )}
    </>
  )
}
