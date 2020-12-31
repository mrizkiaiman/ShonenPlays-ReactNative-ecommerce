import React, {useState} from 'react'
import {ScrollView, View, TouchableOpacity} from 'react-native'
//Styling
import styles from './style'
//Components
import {Product, Search} from '../../components'
//Functions
import {useFetchHandler} from '../../hooks'

export default ({navigation, route: {params}}) => {
  const [keyword, setKeyword] = useState('')
  const productList = useFetchHandler({
    method: 'get',
    url: '/products/category',
    params: {
      categoryId: params.category._id,
    },
  })

  return (
    <ScrollView>
      <Search keyword={keyword} setKeyword={setKeyword} />
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
