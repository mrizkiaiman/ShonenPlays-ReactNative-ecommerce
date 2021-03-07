import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native'
import {useDispatch} from 'react-redux'
//Styling
import {Size, Buttons} from '../../../../style'
import {tailwind} from '../../../../style/tailwind'
const {width, height} = Size
//Assets
import TrashIcon from '../../../../assets/icons/trash.svg'
//Components
//Functions
import {IDRFormat} from '../../../../utils'
import {addProduct} from '../../../../store/actions/checkout'
import {removeWishlist} from '../../../../store/actions/wishlist'
import {Toast} from '../../../../utils'

export default ({product}) => {
  const {name, img, price} = product
  const dispatch = useDispatch()
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={{uri: img}} />
      <View style={{...tailwind('ml-4 justify-between'), height: 110}}>
        <View>
          <Text style={tailwind('font-normal font-semibold mb-2')}>{name}</Text>
          <Text style={tailwind('font-normal font-semibold text-dgray')}>
            Rp{IDRFormat(price)}
          </Text>
          <View style={tailwind('flex-row items-center mt-7')}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  'Remove',
                  'Are you sure you want to remove this item?',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {
                      text: 'OK',
                      onPress: () => {
                        dispatch(removeWishlist(product))
                        Toast({
                          title: 'Success',
                          text: 'Item has been removed from the wishlist!',
                        })
                      },
                    },
                  ],
                  {cancelable: false},
                )
              }}
              style={styles.deleteButton}>
              <TrashIcon />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                product.qty = 1
                dispatch(addProduct(product))
                Toast({
                  title: 'Success',
                  text: 'Item has been added to the cart!',
                })
              }}
              style={styles.addToCartButton}>
              <Text style={tailwind('font-normal font-semibold text-white')}>
                Add to cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: tailwind('flex-row bg-white p-4 rounded-lg light-shadow mb-5'),
  image: {
    width: 80,
    height: 110,
    borderRadius: 5,
  },
  addToCartButton: {
    ...tailwind('bg-dgreen flex-row items-center justify-center rounded px-12'),
    height: 40,
  },
  deleteButton: {
    ...Buttons.whiteBorderedSubmitButton,
    height: 40,
    width: 40,
    marginRight: 12,
  },
})
