import React, {useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
//Styling
import {Size} from '../../../../style'
const {width, height} = Size
import {tailwind} from '../../../../style/tailwind'
//Assets
import UploadIcon from '../../../../assets/Icons/upload.svg'
//Components
import {Input, Address} from '../../../../components'
//Functions

export default ({Hardcode}) => {
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
          <Text style={tailwind('font-normal font-semibold mb-8')}>
            Default Address
          </Text>
          <Text style={tailwind('font-functional')}>Change Address</Text>
        </View>
        <Address addressData={defaultAddress} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F2F4F7',
    height,
  },
  uploadPhotoContainer: tailwind('flex-row items-center p-4 mt-2 bg-white'),
  profilePhoto: {
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: '#F3F3F3',
    ...tailwind('justify-center items-center'),
  },
  informationContainer: {
    ...tailwind('p-4 bg-white mt-2'),
  },
})
