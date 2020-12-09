import axios from '../axios'
import AsyncStorage from '@react-native-community/async-storage'

export default async (productId, qty) => {
  const token = await AsyncStorage.getItem('token')
  try {
    const response = await axios({
      method: 'patch',
      url: '/carts/add',
      data: {
        productId,
        qty,
      },
      headers: {token},
    })
    return response.data
  } catch (error) {
    throw error
  }
}
