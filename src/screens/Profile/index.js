import React from 'react'
import {Text, View, Image} from 'react-native'
import hardcode from './helpers/hardcode'
import {firstRow, secondRow, thirdRow} from './helpers/menuList'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Assets
//Components
import TabScreenHeader from '../../parts/TabScreenHeader'
import {MenuList} from './components'
//Functions

export default () => {
  const {firstName, lastName, email, img} = hardcode
  return (
    <View style={styles.mainContainer}>
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
          <MenuList key={index} menu={menu} />
        ))}
      </View>
      <View style={styles.menuListContainer}>
        {secondRow.map((menu, index) => (
          <MenuList key={index} menu={menu} />
        ))}
      </View>
      <View style={styles.menuListContainer}>
        {thirdRow.map((menu, index) => (
          <MenuList key={index} menu={menu} />
        ))}
      </View>
    </View>
  )
}
