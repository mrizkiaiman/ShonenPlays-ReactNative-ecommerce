import React, {useState, useMemo} from 'react'
import {ScrollView, View, TouchableOpacity} from 'react-native'
import {Products} from '../../mockdata'
//Styling
import styles from './style'
import {tailwind} from '../../style/tailwind'
//Components
import {Product, Search} from '../../components'
import {EmptyState} from '../../parts'
//Functions
import {useFetchHandler} from '../../hooks'

export default ({navigation, route: {params}}) => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const PopularProducts = useMemo(() => {
    return Products.filter((product) => product.isPopular === true)
  }, [])

  return (
    <ScrollView>
      {PopularProducts.length > 0 ? (
        <View>
          <Search
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
          />
          <View style={styles.mainContainer}>
            {PopularProducts.map((product, index) => (
              <Product
                key={index}
                product={product}
                customStyle={{margin: 8}}
              />
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
