import React, {useEffect, useState} from 'react'
import {Text, View, ScrollView} from 'react-native'
import {useSelector} from 'react-redux'
import styles from './style'
//Components
import {Product} from './components'
import {Button} from '../../components'
import {EmptyState, TabScreenHeader} from '../../parts'
//Functions
import {IDRFormat} from '../../utils'
import {tailwind} from '../../style/tailwind'

export default ({navigation}) => {
  const checkoutFromRedux = useSelector((state) => state.checkout.data)

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
          {checkoutFromRedux && checkoutFromRedux.length === 0 ? (
            <View style={tailwind('mt-10')}>
              <EmptyState
                onSubmit={() => navigation.navigate('Market')}
                screen="Cart"
                buttonText="Browse items"
              />
            </View>
          ) : (
            checkoutFromRedux &&
            checkoutFromRedux.products &&
            (checkoutFromRedux.products.length > 0 ? (
              checkoutFromRedux.products.map((item, index) => (
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
            ))
          )}
        </View>
      </ScrollView>
      {checkoutFromRedux &&
        checkoutFromRedux.products &&
        checkoutFromRedux.products.length > 0 && (
          <View style={styles.footer}>
            <View>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.priceTotalText}>
                Rp{IDRFormat(Number(checkoutFromRedux.total))}
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
