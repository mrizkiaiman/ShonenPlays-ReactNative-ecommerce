import React from 'react'
import {Text, View, ScrollView} from 'react-native'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Assets
//Components
import {TabScreenHeader} from '../../parts'
//Functions

export default () => {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <TabScreenHeader
          text={{
            greenText: 'Mar',
            orangeText: 'ket',
          }}
        />
      </View>
    </ScrollView>
  )
}
