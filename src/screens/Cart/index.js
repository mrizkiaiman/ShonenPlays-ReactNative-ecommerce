import React from 'react'
import {Text, View, ScrollView} from 'react-native'
import styles from './style'
//Styling
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Components
import TabScreenHeader from '../../parts/TabScreenHeader'
import Product from './components/Product'
import Button from '../../components/Button'

export default () => {
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
          <Product />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.priceTotalText}>Rp15.000</Text>
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
