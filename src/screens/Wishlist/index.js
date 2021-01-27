import React, {useState, useMemo} from 'react'
import {Text, View, ScrollView} from 'react-native'
import {useSelector} from 'react-redux'
import {Products} from '../../mockdata'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Assets
//Components
import {EmptyState} from '../../parts'
import {Search, Product} from '../../components'
import {WishlistProduct} from './components'
//Functions

export default () => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const recommendedItems = useMemo(() => {
    return Products.filter((product) => product.isPopular === true)
  }, [])
  const wishlistFromRedux = useSelector((state) => state.wishlist.data)
  return (
    <>
      <ScrollView>
        {wishlistFromRedux.length > 0 ? (
          <View>
            <View style={styles.mainContainer}>
              <Search
                searchKeyword={searchKeyword}
                setSearchKeyword={setSearchKeyword}
                onSubmit={() => console.log('Test')}
              />
              <View style={tailwind('m-4')}>
                {wishlistFromRedux.map((product, index) => (
                  <WishlistProduct key={index} product={product} />
                ))}
              </View>
            </View>
            <View style={tailwind('mt-2 mx-4')}>
              <Text style={tailwind('font-normal font-semibold mb-6')}>
                Recommended items
              </Text>
            </View>
            <ScrollView style={tailwind('ml-2')} horizontal>
              {recommendedItems.map((product, index) => (
                <Product
                  key={index}
                  customStyle={tailwind('mx-2')}
                  product={product}
                />
              ))}
            </ScrollView>
          </View>
        ) : (
          <View style={tailwind('mt-10')}>
            <EmptyState
              onSubmit={() => navigation.navigate('Market')}
              screen="Wishlist"
              buttonText="Browse items"
            />
          </View>
        )}
      </ScrollView>
    </>
  )
}
