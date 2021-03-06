import React, {useState, useMemo, useEffect} from 'react'
import {ScrollView, View, Text, Image} from 'react-native'
//Data
import {Categories, Products} from '../../mockdata'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Components
import {Carousel, PopularCategory, SearchBar} from './components'
import {Category, Product, ActivityIndicator} from '../../components'
import {ScrollViewBounced} from '../../parts'
//Functions
import {useAPI} from '../../hooks'
import {FetchBestSeller, FetchPopularCategories} from '../../services/Home'

export default function Home({navigation}) {
  const [searchKeyword, setSearchKeyword] = useState('')
  const getBestSellerAPI = useAPI(FetchBestSeller)
  const getPopularCategoriesAPI = useAPI(FetchPopularCategories)

  if (getBestSellerAPI.loading && getPopularCategoriesAPI.loading)
    return <ActivityIndicator />

  return getBestSellerAPI.loading && getPopularCategoriesAPI.loading ? (
    <ActivityIndicator />
  ) : (
    <View>
      <ScrollView>
        <ScrollViewBounced color="#006266" />
        <View style={styles.mainContainer}>
          <View style={styles.banner}>
            <View style={styles.bannerContentContainer}>
              <Text style={styles.bannerShonenText}>
                Shonen<Text style={styles.bannerPlaysText}>Plays</Text>
              </Text>
              <Text style={styles.welcomeUserText}>
                Welcome, M. Rizki Aiman
              </Text>
              <SearchBar
                searchKeyword={searchKeyword}
                setSearchKeyword={setSearchKeyword}
                customStyle={{
                  container: {
                    marginTop: 24,
                  },
                }}
              />
            </View>
            <View style={styles.carouselContainer}>
              <Carousel />
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.titleSectionText}>Popular</Text>
              {/* <Text style={styles.functionalText}>See all</Text> */}
            </View>
            <ScrollView horizontal style={styles.sectionContentContainer}>
              {getPopularCategoriesAPI.response.map((category, index) => (
                <PopularCategory key={index} category={category} />
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              ...styles.sectionContainer,
              marginTop: 40,
            }}>
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.titleSectionText}>Best Seller</Text>
              <Text
                onPress={() =>
                  navigation.navigate('Products', {keyword: 'Best Seller'})
                }
                style={styles.functionalText}>
                See all
              </Text>
            </View>
            <View
              style={{
                ...styles.sectionContentContainer,
                ...tailwind('flex-wrap justify-between items-center'),
              }}>
              {getBestSellerAPI.response.slice(0, 4).map((product, index) => (
                <Product
                  customStyle={{
                    width: width > 410 ? 175 : 155,
                  }}
                  key={product._id}
                  product={product}
                />
              ))}
            </View>
          </View>
          <View
            style={{
              ...styles.sectionContainer,
              ...tailwind('mt-10 mb-7'),
              width,
            }}>
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.titleSectionText}>Categories</Text>
              <Text
                onPress={() =>
                  navigation.navigate('Categories', {
                    Categories,
                  })
                }
                style={styles.functionalText}>
                See all
              </Text>
            </View>
            <View
              style={tailwind(
                'flex-row flex-wrap items-center justify-between',
              )}>
              {Categories.slice(0, 9).map((category, index) => (
                <Category key={index} category={category} />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

//Voucher Section
{
  /* <View
  style={{
    ...styles.sectionContainer,
    marginTop: 40,
    marginBottom: 30,
  }}>
  <View style={styles.sectionHeaderContainer}>
    <Text style={styles.titleSectionText}>Vouchers</Text>
    <Text style={styles.functionalText}>See all</Text>
  </View>
  <ScrollView horizontal style={styles.sectionContentContainer}>
    <View style={styles.voucherImageContainer}>
      <Image
        source={require('../../assets/Vouchers/voucher-1.png')}
        style={styles.voucherImage}
      />
    </View>
  </ScrollView>
</View> */
}
