import React from 'react'
import {Text, View, Image, ScrollView} from 'react-native'
import hardcode from './helpers/hardcode'
import {firstRow, secondRow, thirdRow} from './helpers/menuList'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Components
import {TabScreenHeader} from '../../parts'
import {Menu} from './components'

export default () => {
  const {firstName, lastName, email, img} = hardcode
  return (
    <ScrollView style={styles.mainContainer}>
      <TabScreenHeader
        text={{
          greenText: 'Pro',
          orangeText: 'file',
        }}
      />
      <View style={styles.profileContainer}>
        <Image style={styles.profilePhoto} source={{uri: img}} />
        <View style={styles.profileNameContainer}>
          <Text style={styles.nameText}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.emailText}>{email}</Text>
        </View>
      </View>
      <View style={styles.menuListContainer}>
        {firstRow.map((menu, index) => (
          <Menu key={index} menu={menu} />
        ))}
      </View>
      <View style={styles.menuListContainer}>
        {secondRow.map((menu, index) => (
          <Menu key={index} menu={menu} />
        ))}
      </View>
      <View style={{...styles.menuListContainer, marginBottom: 8}}>
        {thirdRow.map((menu, index) => (
          <Menu key={index} menu={menu} />
        ))}
      </View>
    </ScrollView>
  )
}
