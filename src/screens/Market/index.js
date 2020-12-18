import React from 'react'
import {Text, View} from 'react-native'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Assets
//Components
import TabScreenHeader from '../../parts/TabScreenHeader'
//Functions

export default () => {
  return (
    <View style={styles.mainContainer}>
      <TabScreenHeader
        text={{
          greenText: 'Mar',
          orangeText: 'ket',
        }}
      />
    </View>
  )
}
