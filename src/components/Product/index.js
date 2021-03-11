import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useDispatch} from 'react-redux'
import {Image} from 'react-native-expo-image-cache'
//Styling
import {Size, Buttons} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Assets
import WishlistIcon from '../../assets/icons/wishlist.svg'
//Components
import Button from '../Button'
//Others
import IDRFormat from '../../utils/IDRFormat'
import {Toast} from '../../utils'
import {AddToCart} from '../../services/cart'
import {updateCart} from '../../store/actions/cart'

export default ({product, customStyle}) => {
  const styles = StyleSheet.create({
    mainContainer: {
      ...tailwind(
        'light-shadow bg-white rounded-xl mb-4 items-center justify-between',
      ),
      width: width > 410 ? 175 : 155,
      ...customStyle,
      height: 320,
    },
    contentContainer: tailwind('mx-2'),
    productImage: {
      width: width > 410 ? 150 : 140,
      height: 180,
      borderRadius: 8,
      marginTop: 8,
      alignSelf: 'center',
    },
    productText: {
      ...tailwind('font-normal text-xs mt-2'),
      width: width > 410 ? 140 : 135,
    },
    priceProductText: tailwind('font-normal font-semibold text-xs mx-2'),
    addToCartButton: {
      ...Buttons.submitButton,
      height: 40,
      width: width > 410 ? 110 : 95,
      marginRight: 5,
    },
    wishListButton: {
      ...Buttons.submitButton,
      height: 40,
      width: 40,
      backgroundColor: '#ff6b6b',
    },
    buttonText: tailwind('font-normal font-semibold text-white text-sm'),
  })

  const {name, price, img} = product
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const addToCart = async () => {
    const updatedCart = await AddToCart({
      productId: product._id,
      qty: 1,
      price: product.price,
    })
    dispatch(updateCart(updatedCart.data))
    Toast({title: 'Success', text: 'Added to cart!'})
  }

  const addToWishlist = () => {}

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => navigation.push('ProductDetails', {product})}
        style={styles.contentContainer}>
        <Image
          style={styles.productImage}
          uri={img}
          tint="light"
          preview={{
            uri: product.thumbnailImg
              ? product.thumbnailImg
              : 'https://res.cloudinary.com/dqdhg7qnc/image/upload/c_thumb,w_200,g_face/v1615098166/shonenplays/Model_Kit_-_Barbatos_msxbpy.png',
          }}
        />
        <Text style={styles.productText}>{name}</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.priceProductText}>Rp. {IDRFormat(price)}</Text>
        <View style={tailwind('flex-row items-center m-2 mb-3')}>
          <Button
            styling={{
              textStyle: styles.buttonText,
              buttonStyle: styles.addToCartButton,
            }}
            title="Add to cart"
            onSubmit={() => addToCart()}
          />
          <TouchableOpacity
            onPress={() => addToWishlist()}
            style={styles.wishListButton}>
            <WishlistIcon />
          </TouchableOpacity>
        </View>
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
