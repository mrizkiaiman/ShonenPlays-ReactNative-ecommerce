import React from 'react'
import {SafeAreaView, View, Text} from 'react-native'
import styles from './style'
//Components
import SearchBar from '../../components/SearchBar'

export default function Home() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.banner}>
        <View style={styles.bannerContentContainer}>
          <Text style={styles.bannerShonenText}>
            Shonen<Text style={styles.bannerPlaysText}>Plays</Text>
          </Text>
          <Text style={styles.welcomeUserText}>Welcome, M. Rizki Aiman</Text>
          <SearchBar
            customStyle={{
              container: {
                marginTop: 24,
              },
            }}
          />
        </View>
      </View>
    </View>
  )
}
