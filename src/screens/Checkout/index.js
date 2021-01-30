import React, {useRef, useState} from 'react'
import {Text, View, ScrollView} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {Shipping} from '../../mockdata'
//Styling
import styles from './style'
import {Size, Buttons} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Assets
import RightIcon from '../../assets/Icons/rightDirection-dgreen.svg'
//Components
import {Modalize} from 'react-native-modalize'
import {
  OrderSummary,
  Product,
  AddressModal,
  ShippingMethodModal,
} from './components'
import {Button, Address} from '../../components'
import {FooterButton, EmptyState, ModalHeader} from '../../parts'

export default ({navigation}) => {
  const dispatch = useDispatch()
  const checkoutFromRedux = useSelector((state) => state.checkout.data)
  const defaultAddress = useSelector((state) => state.address.data).filter(
    (address) => address.isDefault == true,
  )
  const [selectedAddress, setSelectedAddress] = useState(defaultAddress[0])
  const [selectedShippingMethod, setSelectedShippingMethod] = useState('')

  const setAddress = (value) => {
    setSelectedAddress(value)
    modalAction('close', 'shippingAddress')
  }

  const setShippingMethod = (value) => {
    setSelectedShippingMethod(value)
    modalAction('close', 'shippingMethod')
  }

  //Modalize
  const changeShippingAddressModal = useRef(null)
  const changeShippingMethodModal = useRef(null)
  const modalAction = (action, type) => {
    let modal
    if (type === 'shippingAddress') {
      modal = changeShippingAddressModal.current
    } else {
      modal = changeShippingMethodModal.current
    }
    if (modal) {
      if (action === 'open') {
        modal.open()
      } else if (action === 'close') {
        modal.close()
      }
    }
  }

  return (
    <>
      <ScrollView style={styles.mainContainer}>
        {/* Shipping Address */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.titleSectionText}>Shipping Address</Text>
            {selectedAddress && (
              <Text
                onPress={() => modalAction('open', 'shippingAddress')}
                style={styles.functionalText}>
                Change Address
              </Text>
            )}
          </View>
          {selectedAddress ? (
            <Address addressData={selectedAddress} />
          ) : (
            <EmptyState
              onSubmit={() => navigation.navigate('AddShippingAddress')}
              screen="Address"
              buttonText="Add new address"
              size="sm"
            />
          )}
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
            onSubmit={() => modalAction('open', 'shippingMethod')}
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
      <Modalize
        ref={changeShippingAddressModal}
        HeaderComponent={
          <ModalHeader
            cancelMethod={() => modalAction('close', 'shippingAddress')}
            saveMethod={() => console.log('Test')}
            title="Change Address"
          />
        }
        modalHeight={height / 1.25}>
        <AddressModal setAddress={setAddress} />
      </Modalize>
      <Modalize
        ref={changeShippingMethodModal}
        HeaderComponent={
          <ModalHeader
            cancelMethod={() => modalAction('close', 'shippingMethod')}
            saveMethod={() => console.log('Test')}
            title="Change Shipping Method"
          />
        }
        modalHeight={height / 1.25}>
        <ShippingMethodModal setShippingMethod={setShippingMethod} />
      </Modalize>
    </>
  )
}
