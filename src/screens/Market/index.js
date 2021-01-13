import React, {useState, useMemo} from 'react'
import {Text, View, ScrollView, Image} from 'react-native'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Assets
//Components
import {TabScreenHeader} from '../../parts'
import {Search, Product, Category} from '../../components'
//Functions
import {popularItems, promoItems} from './helpers/Hardcode'
import {useFetchHandler} from '../../hooks'

export default ({navigation}) => {
  const [keyword, setKeyword] = useState('')
  const categoryList = useFetchHandler({
    method: 'get',
    url: '/categories',
  })

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <TabScreenHeader
          text={{
            greenText: 'Mar',
            orangeText: 'ket',
          }}
        />
        <Search
          keyword={keyword}
          setKeyword={setKeyword}
          onSubmit={() => console.log('Test')}
        />
        <Image
          source={{
            uri:
              'https://storage.googleapis.com/shonenplays-mobile/promos/Screen%20Shot%202021-01-13%20at%2017.56.35.png',
          }}
          style={styles.bannerImage}
        />

        <View
          style={{
            ...styles.sectionContainer,
            marginTop: 30,
          }}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.titleSectionText}>Popular Items</Text>
            <Text style={styles.functionalText}>See all</Text>
          </View>
          <View style={tailwind('flex-wrap flex-row justify-between')}>
            {popularItems.slice(0, 4).map((product, index) => (
              <Product
                key={index}
                product={product}
                customStyle={{marginBottom: 25, width: width > 410 ? 170 : 155}}
              />
            ))}
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.titleSectionText}>Promo Items</Text>
            <Text style={styles.functionalText}>See all</Text>
          </View>
          <ScrollView horizontal style={styles.sectionContentContainer}>
            {promoItems.map((product, index) => (
              <Product
                key={index}
                product={product}
                customStyle={{marginRight: 25}}
              />
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            ...styles.sectionContainer,
            ...tailwind('mt-4 mb-4'),
            width,
          }}>
          <View style={{...styles.sectionHeaderContainer, marginBottom: 0}}>
            <Text style={styles.titleSectionText}>Categories</Text>
            <Text
              onPress={() =>
                navigation.navigate('Categories', {
                  categoryList: categoryList.response,
                })
              }
              style={styles.functionalText}>
              See all
            </Text>
          </View>
          <View
            style={tailwind('flex-row flex-wrap items-center justify-between')}>
            {categoryList.response.slice(0, 6).map((category, index) => (
              <Category key={index} category={category} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
