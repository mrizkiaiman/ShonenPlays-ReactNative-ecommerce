import React, {useState} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
//Styling
import {Size} from '../../../../style'
import {tailwind} from '../../../../style/tailwind'
const {width, height} = Size
//Assets
//Components
import QtyControl from '../../../../components/QtyControl'
//Functions
import IDRFormat from '../../../../utils/IDRFormat'

export default ({productData}) => {
  const {product, qty} = productData
  const [value, setValue] = useState(qty)

  return (
    <View style={styles.mainContainer}>
      <Image style={styles.productImage} source={{uri: product.img}} />
      <View style={styles.contentContainer}>
        <Text numberOfLines={1} style={styles.productNameText}>
          {product.name}
        </Text>
        <Text numberOfLines={1} style={styles.productPriceText}>
          Rp{IDRFormat(product.price)}
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
          />
        </View>
      </View>
      <TouchableOpacity>
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
    ...tailwind('bg-white rounded-xl p-4 flex-row light-shadow'),
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
