import React, {useState} from 'react'
import {Text, View, ScrollView, Image} from 'react-native'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Assets
//Components
import Product from '../../components/Product'
import FooterButton from '../../parts/FooterButton'
import QtyControl from '../../components/QtyControl'
//Functions
import IDRFormat from '../../utils/IDRFormat'
import Toast from '../../utils/Toast'
import {useFetchHandler} from '../../hooks'
import {AddToCart} from '../../services/Cart/index'

export default ({route: {params}, navigation}) => {
  const [qty, setQty] = useState(1)
  const {product} = params
  const relatedProducts = useFetchHandler({
    method: 'get',
    url: '/products/category',
    params: {
      categoryId: product.category,
    },
  })

  const addToCartOnSubmit = () => {
    AddToCart(product._id, qty)
      .then((response) => {
        Toast({title: 'Success', text: 'Your item has been added to the cart!'})
        navigation.goBack()
      })
      .catch((err) => {
        Toast({title: 'Error', text: 'Something is wrong', type: 'error'})
      })
  }

  return (
    <>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.mainContentContainer}>
          <Image source={{uri: product.img}} style={styles.productImage} />
          <Text style={styles.productNameText}>{product.name}</Text>
          <Text style={styles.priceText}>Rp{IDRFormat(product.price)}</Text>
          <Text style={styles.descriptionText}>
            The manga series within the magazine target young male readers and
            tend to consist of many action scenes and a fair amount of comedy.
            The chapters of series that run in Weekly Shōnen Jump are collected
            and published in tankōbon volumes under the "Jump Comics" imprint
            every two to three months.
          </Text>
          <View style={styles.qtyControlContainer}>
            <QtyControl value={qty} setValue={setQty} />
          </View>
        </View>
        <View style={styles.relatedProductsContainer}>
          <Text style={styles.relatedProductText}>Related Products</Text>
          <ScrollView style={{marginStart: -10}} horizontal>
            {relatedProducts.response.map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      <View>
        <FooterButton
          onSubmit={() => addToCartOnSubmit()}
          styling={{
            buttonStyle: styles.addToCartButton,
            textStyle: styles.addToCartButtonText,
          }}
          title="Add to cart"
        />
      </View>
    </>
  )
}

//   status
//   _id
//   name
//   description
//   img
//   stock
//   price
//   weight
//   category
