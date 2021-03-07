import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useDispatch} from 'react-redux'
//Styling
import {Size} from '../../../../style'
import {tailwind} from '../../../../style/tailwind'
const {width, height} = Size
//Assets
import DeleteIcon from '../../../../assets/icons/delete-x.svg'
import EditIcon from '../../../../assets/icons/edit.svg'
//Components
//Functions
import {removeAddress} from '../../../../store/actions/address'
import {Toast} from '../../../../utils'

export default ({address}) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.nameText}>{address.name}</Text>
      </View>
      <Text style={styles.addressText}>
        {address.address}, {address.city}, {address.province}{' '}
        {address.postalCode}
      </Text>
      <Text style={styles.cpText}>{address.name}</Text>
      <Text style={styles.phoneText}>{address.phone}</Text>
      <View style={styles.functionalButtonContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('EditShippingAddress', {addressData: address})
          }
          style={tailwind('flex-row items-center mr-2')}>
          <EditIcon style={tailwind('mr-1')} />
          <Text style={styles.functionalText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              'Remove',
              'Are you sure you want to remove this address?',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'OK',
                  onPress: () => {
                    dispatch(removeAddress(address))
                    Toast({
                      title: 'Success',
                      text: 'Address has been removed',
                    })
                  },
                },
              ],
              {cancelable: false},
            )
          }}
          style={tailwind('flex-row items-center')}>
          <DeleteIcon style={tailwind('mr-1')} />
          <Text style={styles.functionalText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: tailwind(
    'bg-white mx-4 mb-7 p-6 pb-8 rounded-lg light-shadow',
  ),
  titleContainer: {
    ...tailwind('flex-row justify-between items-center mb-4'),
    borderBottomWidth: 0.5,
    borderColor: '#E2E2E2',
  },
  nameText: tailwind('font-semibold text-lg mb-2 mt-1'),
  addressText: {
    ...tailwind('font-normal mb-5'),
    width: width * 0.75,
    lineHeight: 24,
    textAlign: 'justify',
  },
  cpText: tailwind('font-normal font-semibold text-dgray mb-3'),
  phoneText: tailwind('font-normal font-semibold text-dgray'),
  functionalButtonContainer: tailwind('flex-row items-center mt-5'),
  functionalText: tailwind('font-functional mt-1'),
})

// {
//   name,
//   address,
//   phone,
//   lat,
//   lng,
//   city,
//   province,
//   postalCode
// },
