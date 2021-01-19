import React, {useState} from 'react'
import {Text, View} from 'react-native'
import Hardcode from './helpers/Hardcode'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Assets
import UploadIcon from '../../assets/Icons/upload.svg'
//Components
import {Input} from '../../components'
import {DefaultAddress} from './components'
//Functions

export default () => {
  const {firstName, lastName, mail, defaultAddress, mobilePhone} = Hardcode
  const [name, setName] = useState(`${firstName} ${lastName}`)
  const [email, setEmail] = useState(mail)
  const [phone, setPhone] = useState(mobilePhone)

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
      value: email,
      onChangeText: setEmail,
      placeholder: 'Email',
      type: 'box',
      customContainerStyle: {
        marginBottom: 20,
      },
      disabled: true,
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

  return (
    <View style={styles.mainContainer}>
      <View style={styles.uploadPhotoContainer}>
        <View style={styles.profilePhoto}>
          <UploadIcon />
        </View>
        <Text style={tailwind('font-normal ml-6 text-lg')}>
          Upload profile photo
        </Text>
      </View>
      <View style={styles.informationContainer}>
        <Text style={tailwind('font-normal font-semibold mb-6')}>
          Contact Person
        </Text>
        {userInfo.map((info, index) => (
          <Input key={index} {...info} />
        ))}
      </View>
      <View style={styles.informationContainer}>
        <View style={tailwind('flex-row justify-between')}>
          <Text style={tailwind('font-normal font-semibold mb-6')}>
            Default Address
          </Text>
          <Text style={tailwind('font-functional')}>Change Address</Text>
        </View>
        <DefaultAddress shippingAddress={defaultAddress} />
      </View>
    </View>
  )
}
