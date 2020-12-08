import React from 'react'
import {ScrollView, View, TouchableOpacity} from 'react-native'
//Styling
import styles from './style'
//Components
import Product from '../../components/Product'
//Functions
import {useFetchHandler} from '../../hooks'

export default ({navigation, route: {params}}) => {
  const productList = useFetchHandler({
    method: 'get',
    url: `/products/${params.category._id}`,
  })

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        {productList.response.map((product, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('ProductDetails', {product})}>
            <Product product={product} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}
