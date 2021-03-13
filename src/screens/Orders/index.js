import React from 'react'
import {Text, View, ScrollView, TouchableOpacity} from 'react-native'
import {useSelector} from 'react-redux'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Components
import {TabScreenHeader, EmptyState} from '../../parts'
import {OrderCard} from './components'

export default ({navigation}) => {
  const ordersFromRedux = useSelector((state) => state.orders.data)
  return (
    <>
      <ScrollView>
        <View style={styles.mainContainer}>
          <TabScreenHeader
            text={{
              greenText: 'Ord',
              orangeText: 'ers',
            }}
          />
          {ordersFromRedux.length > 0 ? (
            <View style={tailwind('mt-4')}>
              {ordersFromRedux.map((order, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate('OrderDetails', {order})}>
                  <OrderCard order={order} />
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <View style={tailwind('mt-10')}>
              <EmptyState
                onSubmit={() => navigation.navigate('Market')}
                screen="Orders"
                buttonText="Browse items"
              />
            </View>
          )}
        </View>
      </ScrollView>
    </>
  )
}
