import React, {useState} from 'react'
import {Text, View, ScrollView, TouchableOpacity} from 'react-native'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Assets
import PinLocationIcon from '../../assets/Icons/map.svg'
//Components
import {Input} from '../../components'
import {FooterButton} from '../../parts'

export default ({navigation}) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [province, setProvince] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')

  const userInfo = [
    {
      value: name,
      onChangeText: setName,
      placeholder: 'Name',
      type: 'box',
      customContainerStyle: {
        marginBottom: 20,
      },
    },
    {
      value: phone,
      onChangeText: setPhone,
      placeholder: 'Phone number',
      type: 'box',
      customContainerStyle: {
        marginBottom: 20,
      },
    },
  ]

  const addressInfo = [
    {
      value: address,
      onChangeText: setAddress,
      placeholder: 'Street address',
      type: 'box',
      customContainerStyle: {
        marginBottom: 20,
      },
    },
    {
      value: province,
      onChangeText: setProvince,
      placeholder: 'Province',
      type: 'form',
      customContainerStyle: {
        marginBottom: 20,
      },
    },
    {
      value: city,
      onChangeText: setCity,
      placeholder: 'City',
      type: 'form',
      customContainerStyle: {
        marginBottom: 20,
      },
    },
    {
      value: postalCode,
      onChangeText: setPostalCode,
      placeholder: 'Postal code',
      type: 'box',
      customContainerStyle: {
        marginBottom: 20,
      },
    },
  ]

  return (
    <>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitleText}>Shipping Address</Text>
            {addressInfo.map((info, index) => (
              <Input key={index} {...info} />
            ))}
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Maps')}
            style={styles.pinLocationContainer}>
            <PinLocationIcon style={{marginRight: 10}} />
            <Text style={styles.pinLocationText}>Pin location</Text>
          </TouchableOpacity>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitleText}>Contact Person</Text>
            {userInfo.map((info, index) => (
              <Input key={index} {...info} />
            ))}
          </View>
        </View>
      </ScrollView>
      <FooterButton
        styling={{
          buttonStyle: styles.saveButton,
          textStyle: styles.saveButtonText,
        }}
        title="Save"
        onSubmit={() => console.log('Test')}
      />
    </>
  )
}
