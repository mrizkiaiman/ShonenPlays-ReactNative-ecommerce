import React, {useState, useEffect} from 'react'
import {Text, View, ScrollView, TouchableOpacity} from 'react-native'
import {useSelector} from 'react-redux'
import {useIsFocused} from '@react-navigation/native'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Assets
//Components
import {TabScreenHeader, EmptyState} from '../../parts'
import {OrderCard} from './components'

export default ({navigation}) => {
  useEffect(() => {
    setOrders(ordersFromRedux)
  }, [isFocused])

  const isFocused = useIsFocused()
  const ordersFromRedux = useSelector((state) => state.orders.data)
  const [orders, setOrders] = useState([])
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

          {orders.length > 0 ? (
            <View style={tailwind('mt-4')}>
              {orders.map((order, index) => (
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
