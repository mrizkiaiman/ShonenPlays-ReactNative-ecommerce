import React from 'react'
import {Text, View} from 'react-native'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style'
//Assets
//Components
import Product from '../../components/Product'
//Functions
import {useFetchHandler} from '../../hooks'

export default ({route: {params}}) => {
  const productList = useFetchHandler({
    method: 'get',
    url: `/products/${params.category.id}`,
  })

  return (
    <View style={styles.mainContainer}>
      {productList.response.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </View>
  )
}
