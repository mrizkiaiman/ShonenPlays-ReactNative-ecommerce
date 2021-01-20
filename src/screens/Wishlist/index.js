import React, {useState} from 'react'
import {Text, View, ScrollView} from 'react-native'
import {wishlist, recommendedItems} from './helpers/Hardcode'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Assets
//Components
import {Search, Product} from '../../components'
import {WishlistProduct} from './components'
//Functions

export default () => {
  const [searchKeyword, setSearchKeyword] = useState('')
  return (
    <>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Search
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            onSubmit={() => console.log('Test')}
          />
          <View style={tailwind('m-4')}>
            {wishlist.map((product, index) => (
              <WishlistProduct key={index} productData={product} />
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
      </ScrollView>
    </>
  )
}
