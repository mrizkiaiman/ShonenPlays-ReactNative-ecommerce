import React from 'react'
import {Text, View, ScrollView} from 'react-native'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Assets
//Components
import {SvgUri} from 'react-native-svg'
//Functions

export default ({
  route: {
    params: {categoryList},
  },
}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.categoryListContainer}>
        {categoryList.map((category, index) => (
          <View
            key={index}
            style={tailwind('justify-center items-center mb-4')}>
            <View
              style={
                index % 2 === 0
                  ? styles.categoryContainer
                  : {...styles.categoryContainer, backgroundColor: '#d5f4e4'}
              }>
              <SvgUri width={80} height={80} uri={category.icon} />
            </View>
            <Text style={styles.categoryText}>{category.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}
