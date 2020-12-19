import React, {useEffect, useMemo} from 'react'
import {ScrollView, View, Text, Image} from 'react-native'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Components
import {Carousel, Category, PopularCategory, SearchBar} from './components'
import {ScrollViewBounced} from '../../parts'
//Functions
import {useFetchHandler} from '../../hooks'

export default function Home({navigation}) {
  const categoryList = useFetchHandler({
    method: 'get',
    url: '/categories',
  })

  const popularCategoryList = useMemo(() => {
    return categoryList.response.filter(
      (category) => category.isPopular === true,
    )
  }, [categoryList])

  return (
    <>
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
              <Text style={styles.functionalText}>See all</Text>
            </View>
            <ScrollView horizontal style={styles.sectionContentContainer}>
              {popularCategoryList.map((category, index) => (
                <PopularCategory key={index} category={category} />
              ))}
            </ScrollView>
          </View>
          <View
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
          </View>
          <View
            style={{
              ...styles.sectionContainer,
              ...tailwind('mt-2 mb-7'),
              width,
            }}>
            <View style={styles.sectionHeaderContainer}>
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
              style={tailwind(
                'flex-row flex-wrap items-center justify-between',
              )}>
              {categoryList.response.slice(0, 9).map((category, index) => (
                <Category key={index} category={category} />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}
