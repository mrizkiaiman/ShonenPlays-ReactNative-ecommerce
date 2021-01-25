import React, {useState, useMemo} from 'react'
import {Text, View, ScrollView, Image} from 'react-native'
import {useDispatch} from 'react-redux'
import {Categories} from '../../mockdata'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Components
import {Product, QtyControl} from '../../components'
import {FooterButton} from '../../parts'
//Functions
import {IDRFormat, Toast} from '../../utils'
import {useFetchHandler} from '../../hooks'
import {AddToCart} from '../../services/Cart'
import {addProduct} from '../../store/actions/checkout'

export default ({route: {params}, navigation}) => {
  const [qty, setQty] = useState(1)
  const {product} = params
  const dispatch = useDispatch()
  const [relatedProducts, setRelatedProduct] = useMemo(() => {
    return Categories.filter((category) => category._id === product.category)
  }, [])

  const filteredRelatedProducts = useMemo(() => {
    return relatedProducts.products.filter(
      (relatedProduct) => relatedProduct._id !== product._id,
    )
  }, [])

  const addToCartOnSubmit = () => {
    product.qty = qty
    dispatch(addProduct(product))
    Toast({title: 'Success', text: 'Your item has been added to the cart!'})
    navigation.goBack()
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
            {filteredRelatedProducts.map((product, index) => (
              <Product
                key={index}
                customStyle={tailwind('mr-3')}
                product={product}
              />
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
