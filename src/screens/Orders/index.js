import React from 'react'
import {Text, View, ScrollView} from 'react-native'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Assets
//Components
import {TabScreenHeader, EmptyState} from '../../parts'
//Functions

export default ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <TabScreenHeader
          text={{
            greenText: 'Ord',
            orangeText: 'ers',
          }}
        />
        <View style={tailwind('mt-10')}>
          <EmptyState
            onSubmit={() => navigation.navigate('Market')}
            screen="Orders"
            buttonText="Browse items"
          />
        </View>
      </View>
    </ScrollView>
  )
}
