import React from 'react'
import {Text, View, ScrollView} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import OrderData from './helpers/Hardcode'
//Styling
import styles from './style'
import {Size, Buttons} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Assets
import RightIcon from '../../assets/Icons/rightDirection-dgreen.svg'
//Components
import {OrderSummary, Product} from './components'
import {Button, Address} from '../../components'
import {FooterButton} from '../../parts'
//Functions

export default () => {
  const dispatch = useDispatch()
  const checkoutFromRedux = useSelector((state) => state.checkout.data)
  const defaultAddress = useSelector((state) => state.address.data).filter(
    (address) => address.isDefault == true,
  )

  return (
    <>
      <ScrollView style={styles.mainContainer}>
        {/* Shipping Address */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.titleSectionText}>Shipping Address</Text>
            <Text style={styles.functionalText}>Change Address</Text>
          </View>
          <Address addressData={defaultAddress[0]} />
        </View>
        {/* Products */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.titleSectionText}>Products</Text>
          </View>
          {checkoutFromRedux.products.map((product, index) => (
            <Product key={index} productData={product} />
          ))}
        </View>
        {/* Shipping Method */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.titleSectionText}>Shipping Method</Text>
          </View>
          <Button
            styling={{
              buttonStyle: styles.changeShippingMethodButton,
              textStyle: styles.changeShippingMethodButtonText,
            }}
            title="Change shipping method"
            additionalComponents={{comps: <RightIcon />, position: 'right'}}
          />
        </View>
        {/* Order Summary */}
        <View style={{...styles.sectionContainer, marginBottom: 30}}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.titleSectionText}>Order Summary</Text>
          </View>
          <OrderSummary
            costData={{
              shipping: checkoutFromRedux.shippingMethod.price
                ? checkoutFromRedux.shippingMethod.price
                : 0,
              total: checkoutFromRedux.total,
              discount: checkoutFromRedux.discount,
            }}
          />
        </View>
      </ScrollView>
      <FooterButton
        styling={{
          buttonStyle: {
            ...Buttons.submitButton,
            width: width * 0.9,
          },
          textStyle: tailwind('font-normal font-semibold text-white'),
        }}
        onSubmit={() => console.log('Test')}
        title="Pay"
      />
    </>
  )
}
