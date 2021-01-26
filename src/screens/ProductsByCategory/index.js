import React, {useState} from 'react'
import {ScrollView, View, TouchableOpacity} from 'react-native'
//Styling
import styles from './style'
import {tailwind} from '../../style/tailwind'
//Components
import {Product, Search} from '../../components'
import {EmptyState} from '../../parts'
//Functions
import {useFetchHandler} from '../../hooks'

export default ({navigation, route: {params}}) => {
  const {category} = params
  const [searchKeyword, setSearchKeyword] = useState('')

  return (
    <ScrollView>
      {category.products.length > 0 ? (
        <View>
          <Search
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
          />
          <View style={styles.mainContainer}>
            {category.products.map((product, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('ProductDetails', {product})
                }>
                <Product product={product} customStyle={{margin: 8}} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : (
        <View style={tailwind('mt-10')}>
          <EmptyState
            onSubmit={() => navigation.navigate('Market')}
            screen="Products"
            buttonText="Browse items"
          />
        </View>
      )}
    </ScrollView>
  )
}
