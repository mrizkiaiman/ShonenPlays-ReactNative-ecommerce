import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {useDispatch} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
//Styling
import {Size} from '../../../../style'
import {tailwind} from '../../../../style/tailwind'
const {width, height} = Size
//Assets
//Components
import QtyControl from '../../../../components/QtyControl'
//Functions
import IDRFormat from '../../../../utils/IDRFormat'
import Toast from '../../../../utils/Toast'
import {removeProduct} from '../../../../store/actions/checkout'

export default ({productData}) => {
  const {
    img,
    name,
    qty,
    productId,
    description,
    stock,
    price,
    weight,
    category,
  } = productData
  const [value, setValue] = useState(qty)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const removeFromCartOnSubmit = () => {
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
            dispatch(removeProduct(productData))
            Toast({
              title: 'Success',
              text: 'Your item has been removed from the cart',
            })
          },
        },
      ],
      {cancelable: false},
    )
  }

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductDetails', {product: productData})
        }>
        <Image style={styles.productImage} source={{uri: img}} />
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Text numberOfLines={1} style={styles.productNameText}>
          {name}
        </Text>
        <Text numberOfLines={1} style={styles.productPriceText}>
          Rp{IDRFormat(Number(price))}
        </Text>
        <View style={{marginStart: -50, marginTop: 55}}>
          <QtyControl
            value={value}
            setValue={setValue}
            customControlContainerStyle={{
              width: 40,
              height: 40,
              ...tailwind('mx-5'),
            }}
            customValueTextStyle={tailwind('font-semibold text-lg mt-1')}
            customIconSize={20}
            product={productData}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => removeFromCartOnSubmit()}>
        <Ionicons
          style={{marginTop: -2}}
          name="ios-close"
          size={25}
          color="#777777"
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    width: width * 0.9,
    ...tailwind('bg-white rounded-xl p-4 flex-row light-shadow mb-5'),
  },
  contentContainer: tailwind('px-5 pt-1'),
  productImage: {
    height: 150,
    width: 115,
    ...tailwind('rounded-xl'),
  },
  productNameText: {
    ...tailwind('font-normal font-semibold mb-3'),
    width: 170,
  },
  productPriceText: tailwind('font-normal font-semibold text-dgray'),
})
