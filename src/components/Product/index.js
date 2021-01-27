import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useDispatch} from 'react-redux'
//Styling
import {Size, Buttons} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Assets
import WishlistIcon from '../../assets/Icons/wishlist.svg'
//Components
import Button from '../Button'
//Functions
import IDRFormat from '../../utils/IDRFormat'
import {addProduct} from '../../store/actions/checkout'
import {addWishlist} from '../../store/actions/wishlist'
import {Toast} from '../../utils'

export default ({product, customStyle}) => {
  const {name, price, img} = product
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const styles = StyleSheet.create({
    mainContainer: {
      ...tailwind(
        'light-shadow bg-white rounded-xl mb-4 justify-center items-center',
      ),
      width: width > 410 ? 175 : 150,
      ...customStyle,
    },
    contentContainer: tailwind('mx-2'),
    productImage: {
      width: 150,
      height: 180,
      borderRadius: 8,
      marginTop: 10,
    },
    productText: {
      ...tailwind('font-normal text-xs mt-2'),
      width: 140,
    },
    priceProductText: tailwind('font-normal font-semibold text-xs mt-2'),
    addToCartButton: {
      ...Buttons.submitButton,
      height: 40,
      width: width > 410 ? 110 : 100,
      marginRight: 5,
    },
    wishListButton: {
      ...Buttons.submitButton,
      height: 40,
      width: width > 410 ? 40 : 30,
      backgroundColor: '#ff6b6b',
    },
    buttonText: tailwind('font-normal font-semibold text-white text-sm'),
  })

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetails', {product})}
        style={styles.contentContainer}>
        <Image style={styles.productImage} source={{uri: img}} />
        <Text style={styles.productText}>{name}</Text>
        <Text style={styles.priceProductText}>Rp. {IDRFormat(price)}</Text>
      </TouchableOpacity>
      <View style={tailwind('flex-row items-center m-2 mb-3')}>
        <Button
          styling={{
            textStyle: styles.buttonText,
            buttonStyle: styles.addToCartButton,
          }}
          title="Add to cart"
          onSubmit={() => {
            product.qty = 1
            dispatch(addProduct(product))
            Toast({
              title: 'Success',
              text: 'Your item has been added to the cart!',
            })
          }}
        />
        <TouchableOpacity
          onPress={() => {
            product.qty = 1
            dispatch(addWishlist(product))
            Toast({
              title: 'Success',
              text: 'Your item has been saved to the wishlist!',
            })
          }}
          style={styles.wishListButton}>
          <WishlistIcon />
        </TouchableOpacity>
      </View>
    </View>
  )
}

// status,
// _id,
// name,
// description,
// img,
// stock,
// price,
// weight,
// category
