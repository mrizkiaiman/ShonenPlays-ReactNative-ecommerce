import React from 'react'
import {Text, View} from 'react-native'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Assets
//Components
import {EmptyState} from '../../parts'
//Functions

export default ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={tailwind('mt-20')}>
        <EmptyState
          onSubmit={() => navigation.navigate('AddShippingAddress')}
          screen="Address"
          buttonText="Add new address"
        />
      </View>
    </View>
  )
}
