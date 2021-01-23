import React, {useState} from 'react'
import {ScrollView, View, TouchableOpacity} from 'react-native'
//Styling
import styles from './style'
//Components
import {Product, Search} from '../../components'
//Functions
import {useFetchHandler} from '../../hooks'

export default ({navigation, route: {params}}) => {
  const {category} = params
  const [searchKeyword, setSearchKeyword] = useState('')

  return (
    <ScrollView>
      <Search
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <View style={styles.mainContainer}>
        {category.products.map((product, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('ProductDetails', {product})}>
            <Product product={product} customStyle={{margin: 8}} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}
