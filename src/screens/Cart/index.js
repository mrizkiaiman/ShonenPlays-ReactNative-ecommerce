import React, {useEffect, useState} from 'react'
import {Text, View, ScrollView} from 'react-native'
import {useSelector} from 'react-redux'
//Styling
import styles from './style'
import {tailwind} from '../../style/tailwind'
//Components
import {Product} from './components'
import {Button} from '../../components'
import {EmptyState, TabScreenHeader} from '../../parts'

export default ({navigation}) => {
  const cartFromRedux = useSelector((state) => state.cart.data)
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
          {cartFromRedux &&
          cartFromRedux.products &&
          cartFromRedux.length > 0 ? (
            cartFromRedux.products.map((item, index) => (
              <Product key={index} productData={item} />
            ))
          ) : (
            <View style={tailwind('mt-10')}>
              <EmptyState
                onSubmit={() => navigation.navigate('Market')}
                screen="Cart"
                buttonText="Browse items"
              />
            </View>
          )}
        </View>
      </ScrollView>
      {cartFromRedux &&
        cartFromRedux.products &&
        cartFromRedux.products.length > 0 && (
          <View style={styles.footer}>
            <View>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.priceTotalText}>
                Rp{IDRFormat(Number(cartFromRedux.total))}
              </Text>
            </View>
            <Button
              title="Checkout"
              styling={{
                buttonStyle: styles.checkoutButton,
                textStyle: styles.checkoutButtonText,
              }}
              onSubmit={() => navigation.navigate('Checkout')}
            />
          </View>
        )}
    </>
  )
}
