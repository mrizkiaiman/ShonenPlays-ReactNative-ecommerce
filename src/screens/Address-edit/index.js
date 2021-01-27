import React, {useState, useRef} from 'react'
import {Text, View, ScrollView, TouchableOpacity} from 'react-native'
import {useDispatch} from 'react-redux'
import {Provinces} from '../../mockdata'
//Styling
import styles from './style'
import {Size} from '../../style'
const {width, height} = Size
import {tailwind} from '../../style/tailwind'
//Assets
import PinLocationIcon from '../../assets/Icons/map.svg'
import CheckedIcon from '../../assets/Icons/circle-check.svg'
//Components
import {Modalize} from 'react-native-modalize'
import {ProvinceModal, CityModal} from './components'
import {Input} from '../../components'
import {FooterButton, ModalHeader} from '../../parts'
//Functions
import {Toast} from '../../utils'
import {addAddress, updateAddress} from '../../store/actions/address'

export default ({navigation, route}) => {
  const {
    params: {addressData},
  } = route

  const [name, setName] = useState(addressData.name)
  const [pic, setPic] = useState(addressData.pic)
  const [phone, setPhone] = useState(addressData.phone)
  const [address, setAddress] = useState(addressData.address)
  const [province, setProvince] = useState(addressData.province)
  const [city, setCity] = useState(addressData.city)
  const [postalCode, setPostalCode] = useState(addressData.postalCode)
  const provinces = Object.keys(Provinces)
  const [cities, setCities] = useState([])
  const dispatch = useDispatch()
  //Modalize
  const provinceModal = useRef(null)
  const cityModal = useRef(null)
  const modalAction = (action, type) => {
    let modal
    if (type === 'province') {
      modal = provinceModal.current
    } else if (type === 'city') {
      modal = cityModal.current
    }
    if (modal) {
      if (action === 'open') {
        modal.open()
      } else if (action === 'close') {
        modal.close()
      }
    }
  }
  const saveAddress = () => {
    if (!address || !province || !city || !postalCode || !name || !phone) {
      Toast({
        title: 'Warning!',
        text: 'Please fill all required input',
        type: 'error',
      })
    } else {
      dispatch(
        updateAddress({
          _id: addressData._id,
          name,
          phone,
          address,
          province,
          city,
          postalCode,
        }),
      )
      Toast({
        title: 'Success',
        text: 'Your address has been saved!',
      })
      navigation.goBack()
    }
  }

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
      value: name,
      onChangeText: setName,
      placeholder: 'Address name',
      type: 'box',
      customContainerStyle: {
        marginBottom: 20,
      },
    },
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
      onSubmit: () => modalAction('open', 'province'),
    },
    {
      value: city,
      onChangeText: setCity,
      placeholder: 'City',
      type: 'form',
      customContainerStyle: {
        marginBottom: 20,
      },
      onSubmit: () => {
        if (cities.length === 0)
          Toast({
            title: 'Warning!',
            text: 'You need to fill province data first',
            type: 'error',
          })
        else modalAction('open', 'city')
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
        onSubmit={() => saveAddress()}
      />
      {/* Modals */}
      <Modalize
        ref={provinceModal}
        HeaderComponent={
          <ModalHeader
            cancelMethod={() => modalAction('close', 'province')}
            saveMethod={() => console.log('Test')}
            title="Province"
          />
        }
        modalHeight={height / 1.25}>
        {provinces.map((value, index) => (
          <TouchableOpacity
            style={styles.provinceCityListContainer}
            onPress={() => {
              setProvince(value)
              setCity('')
              setCities(Provinces[value])
              modalAction('close', 'province')
            }}
            key={index}>
            <Text style={styles.provinceCityListText}>{value}</Text>
            {value === province ? (
              <CheckedIcon style={{marginRight: 16, marginBottom: 4}} />
            ) : null}
          </TouchableOpacity>
        ))}
      </Modalize>
      <Modalize
        ref={cityModal}
        HeaderComponent={
          <ModalHeader
            cancelMethod={() => modalAction('close', 'city')}
            saveMethod={() => console.log('Test')}
            title="City"
          />
        }
        modalHeight={height / 1.25}>
        {cities.map((value, index) => (
          <TouchableOpacity
            style={styles.provinceCityListContainer}
            onPress={() => {
              setCity(value)
              modalAction('close', 'city')
            }}
            key={index}>
            <Text style={styles.provinceCityListText}>{value}</Text>
            {value === city ? (
              <CheckedIcon style={{marginRight: 16, marginBottom: 4}} />
            ) : null}
          </TouchableOpacity>
        ))}
      </Modalize>
    </>
  )
}
