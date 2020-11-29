import React from 'react'
import {ScrollView, View, Text, Image} from 'react-native'
import styles from './style'
import Categories from './hardcode/categories'
import {Buttons, Colors, Fonts, Size} from '../../style'
//Components
import SearchBar from '../../components/SearchBar'
import StatusBar from '../../components/StatusBar'
import Carousel from './components/Carousel'
import Category from './components/Category'

export default function Home() {
  return (
    <>
      <ScrollView>
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
              {Categories.map((category, index) => (
                <Category key={index} {...category} />
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
              marginTop: 40,
              marginBottom: 30,
            }}>
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.titleSectionText}>Categories</Text>
              <Text style={styles.functionalText}>See all</Text>
            </View>
            <ScrollView
              horizontal
              style={styles.sectionContentContainer}></ScrollView>
          </View>
        </View>
      </ScrollView>
    </>
  )
}
