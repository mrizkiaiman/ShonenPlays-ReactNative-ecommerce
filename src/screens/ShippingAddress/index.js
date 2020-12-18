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

export default () => {
  return (
    <View style={styles.mainContainer}>
      <View style={tailwind('mt-20')}>
        <EmptyState
          onSubmit={() => console.log('Test')}
          screen="Address"
          buttonText="Add new address"
        />
      </View>
    </View>
  )
}
