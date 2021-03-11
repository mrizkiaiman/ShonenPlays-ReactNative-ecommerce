import React, {useContext} from 'react'
import {View, FlatList} from 'react-native'
//Styling
import styles from './style'
import {tailwind} from '../../style/tailwind'
//Components
import {Product, Search} from '../../components'
import {EmptyState} from '../../parts'
//Functions
import {useAPI} from '../../hooks'
import {getProductsByCategory_API} from '../../services/products'
import {StaticContext} from '../../contexts'

export default ({navigation, route: {params}}) => {
  const {categoryId} = params
  const {bestSellerProducts} = useContext(StaticContext)
  const productsByCategory = useAPI(getProductsByCategory_API, categoryId)

  return (
    <>
      {categoryId ? (
        productsByCategory.response.length > 0 ? (
          <FlatList
            ListHeaderComponent={<Search />}
            numColumns={2}
            data={productsByCategory.response}
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
        )
      ) : (
        <FlatList
          ListHeaderComponent={<Search />}
          numColumns={2}
          data={bestSellerProducts.response}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <Product product={item} />}
          columnWrapperStyle={tailwind('justify-between m-4 mx-6')}
        />
      )}
    </>
  )
}
