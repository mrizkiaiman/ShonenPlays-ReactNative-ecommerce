import React from 'react'
import {Text, View, ScrollView} from 'react-native'
import {useSelector} from 'react-redux'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Assets
import PlusIcon from '../../assets/icons/plus.svg'
//Components
import {EmptyState} from '../../parts'
import {Button} from '../../components'
import {AddressCard} from './components'
//Functions

export default ({navigation}) => {
  const addressFromRedux = useSelector((state) => state.address.data)
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        {addressFromRedux.length > 0 ? (
          <View>
            <Button
              onSubmit={() => navigation.navigate('AddShippingAddress')}
              styling={{
                buttonStyle: styles.addNewAddressButton,
                textStyle: styles.addNewAddressButtonText,
              }}
              title="Add new address"
              additionalComponents={{
                comps: <PlusIcon />,
                position: 'left',
              }}
            />
            <View style={tailwind('mt-4')}>
              {addressFromRedux.map((address, index) => (
                <AddressCard key={index} address={address} />
              ))}
            </View>
          </View>
        ) : (
          <View style={tailwind('mt-20')}>
            <EmptyState
              onSubmit={() => navigation.navigate('AddShippingAddress')}
              screen="Address"
              buttonText="Add new address"
            />
          </View>
        )}
      </View>
    </ScrollView>
  )
}
