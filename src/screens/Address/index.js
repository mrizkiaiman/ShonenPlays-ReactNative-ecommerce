import React from 'react'
import {Text, View, ScrollView} from 'react-native'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Assets
import PlusIcon from '../../assets/Icons/plus.svg'
//Components
import {EmptyState} from '../../parts'
import {Button} from '../../components'
import {AddressCard} from './components'
//Functions
import addressList from './helpers/hardcode'

export default ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
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
        {addressList.length > 0 ? (
          <View style={tailwind('mt-4')}>
            {addressList.map((address, index) => (
              <AddressCard key={index} address={address} />
            ))}
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
