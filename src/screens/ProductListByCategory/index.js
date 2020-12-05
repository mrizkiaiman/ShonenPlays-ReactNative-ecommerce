import React from 'react'
import {Text, View} from 'react-native'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style'
//Assets
//Components
//Functions
import {useFetchHandler} from '../../hooks'
import {FetchProductsByCategory} from '../../services/Home'

export default ({route: {params}}) => {
  const productList = useFetchHandler(
    FetchProductsByCategory(params.category.id),
  )

  return (
    <View style={styles.mainContainer}>
      <Text>{JSON.stringify(productList)}</Text>
    </View>
  )
}
