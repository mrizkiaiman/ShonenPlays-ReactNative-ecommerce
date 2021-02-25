import React, {useState, useMemo} from 'react'
import {ScrollView, View, FlatList} from 'react-native'
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
  const {category, keyword} = params
  const [searchKeyword, setSearchKeyword] = useState('')
  const fetchedProducts = useMemo(() => {
    if (category) {
      return category.products
    } else if (keyword)
      return Products.filter((product) => product.isPopular === true)
  }, [])

  return (
    <>
      {fetchedProducts.length > 0 ? (
        <FlatList
          ListHeaderComponent={
            <Search
              searchKeyword={searchKeyword}
              setSearchKeyword={setSearchKeyword}
            />
          }
          numColumns={2}
          data={fetchedProducts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <Product product={item} />}
          columnWrapperStyle={tailwind('justify-between m-4 mx-6')}
        />
      ) : (
        <View style={tailwind('mt-10')}>
          <EmptyState
            onSubmit={() => navigation.navigate('Market')}
            screen="Products"
            buttonText="Browse items"
          />
        </View>
      )}
    </>
  )
}
