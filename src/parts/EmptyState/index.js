import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
//Styling
import {Size, Buttons} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Assets
import EmptyStateCart from '../../assets/Illustrations/EmptyState/cart.svg'
import EmptyStateOrders from '../../assets/Illustrations/EmptyState/orders.svg'
import EmptyStateAddress from '../../assets/Illustrations/EmptyState/shippingAddress.svg'
//Components
import {Button} from '../../components'
//Functions

export default ({screen, onSubmit, buttonText}) => {
  return (
    <View style={styles.mainContainer}>
      {screen == 'Cart' ? (
        <EmptyStateCart width={236} height={236} />
      ) : screen == 'Orders' ? (
        <EmptyStateOrders width={260} height={260} />
      ) : (
        <EmptyStateAddress style={tailwind('mb-8')} width={220} height={220} />
      )}
      {screen == 'Cart' ? (
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>No item yet</Text>
          <Text style={styles.subTitleText}>
            You can browse item easily in market section
          </Text>
        </View>
      ) : screen == 'Orders' ? (
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>No order yet</Text>
          <Text style={styles.subTitleText}>
            Looks like you haven’t made any order yet
          </Text>
        </View>
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>No shipping address yet</Text>
          <Text style={styles.subTitleText}>
            Looks like you haven’t added shipping address yet
          </Text>
        </View>
      )}
      <Button
        styling={{
          buttonStyle: styles.button,
          textStyle: styles.buttonText,
        }}
        onSubmit={() => onSubmit()}
        title={buttonText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: tailwind('justify-center items-center'),
  button: {
    ...Buttons.submitButton,
    width: 220,
    marginTop: 15,
  },
  buttonText: tailwind('font-normal font-semibold text-lg text-white'),
  textContainer: tailwind('justify-center items-center my-2'),
  titleText: tailwind('font-normal font-semibold text-2xl'),
  subTitleText: tailwind('font-normal text-sm text-dgray'),
})
