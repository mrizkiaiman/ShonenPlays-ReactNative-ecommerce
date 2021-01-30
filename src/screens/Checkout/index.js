import React, {useRef, useEffect, useState} from 'react'
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
//Functions
import {IDRFormat, Toast} from '../../utils'
import {
  updateAddress,
  updateShippingMethod,
  emptyCheckout,
  paidCheckout,
} from '../../store/actions/checkout'
import {updateOrder} from '../../store/actions/orders'

export default ({navigation, route: {params}}) => {
  useEffect(() => {
    setSelectedAddress(params && params.address ? params.address : null)
    dispatch(updateAddress(params && params.address ? params.address : null))
  }, [params])

  const dispatch = useDispatch()
  const checkoutFromRedux = useSelector((state) => state.checkout.data)
  const addressFromRedux = useSelector((state) => state.address.data)
  const defaultAddress = addressFromRedux.filter(
    (address) => address.isDefault == true,
  )
  const [selectedAddress, setSelectedAddress] = useState(defaultAddress[0])
  const [selectedShippingMethod, setSelectedShippingMethod] = useState('')
  const setAddress = (value) => {
    dispatch(updateAddress(value))
    setSelectedAddress(value)
    modalAction('close', 'shippingAddress')
  }

  const setShippingMethod = (value) => {
    dispatch(updateShippingMethod(value))
    setSelectedShippingMethod(value)
    modalAction('close', 'shippingMethod')
  }

  const paymentOnSubmit = () => {
    if (!selectedAddress || !selectedShippingMethod)
      Toast({
        title: 'Warning',
        text: 'You need to fill address and shipping method first',
        type: 'error',
      })
    else {
      dispatch(paidCheckout())
      dispatch(updateOrder())
      dispatch(emptyCheckout())
      navigation.navigate('Home')
      Toast({
        title: 'Success',
        text: 'Payment success!',
      })
    }
  }

  //Modalize
  const changeShippingAddressModal = useRef(null)
  const changeShippingMethodModal = useRef(null)
  const modalAction = (action, type) => {
    let modal
    if (type === 'shippingAddress') {
      modal = changeShippingAddressModal.current
    } else {
      if (!selectedAddress)
        Toast({
          title: 'Warning',
          text: 'You need to fill address first',
          type: 'error',
        })
      else modal = changeShippingMethodModal.current
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
              onSubmit={() =>
                navigation.navigate('AddShippingAddress', {from: 'checkout'})
              }
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
          {checkoutFromRedux &&
            checkoutFromRedux.products &&
            checkoutFromRedux.products.map((product, index) => (
              <Product key={index} productData={product} />
            ))}
        </View>
        {/* Shipping Method */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.titleSectionText}>Shipping Method</Text>
          </View>
          {selectedShippingMethod ? (
            <Button
              styling={{
                buttonStyle: {
                  ...styles.changeShippingMethodButton,
                  ...tailwind('border-dgreen'),
                },
                textStyle: tailwind('font-normal font-semibold'),
              }}
              title={`${selectedShippingMethod.name}  -  Rp${IDRFormat(
                selectedShippingMethod.price,
              )}`}
              additionalComponents={{comps: <RightIcon />, position: 'right'}}
              onSubmit={() => modalAction('open', 'shippingMethod')}
            />
          ) : (
            <Button
              styling={{
                buttonStyle: styles.changeShippingMethodButton,
                textStyle: styles.changeShippingMethodButtonText,
              }}
              title="Change shipping method"
              additionalComponents={{comps: <RightIcon />, position: 'right'}}
              onSubmit={() => modalAction('open', 'shippingMethod')}
            />
          )}
        </View>
        {/* Order Summary */}
        <View style={{...styles.sectionContainer, marginBottom: 30}}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.titleSectionText}>Order Summary</Text>
          </View>
          <OrderSummary
            costData={{
              shipping:
                checkoutFromRedux &&
                checkoutFromRedux.shippingMethod &&
                checkoutFromRedux.shippingMethod.price
                  ? checkoutFromRedux.shippingMethod.price
                  : 0,
              total: checkoutFromRedux && checkoutFromRedux.total,
              discount: checkoutFromRedux && checkoutFromRedux.discount,
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
        onSubmit={() => paymentOnSubmit()}
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
        modalHeight={height / 1.5}>
        <ShippingMethodModal setShippingMethod={setShippingMethod} />
      </Modalize>
    </>
  )
}
