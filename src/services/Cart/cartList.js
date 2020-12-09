import axios from '../axios'
import AsyncStorage from '@react-native-community/async-storage'

export default async () => {
  const token = await AsyncStorage.getItem('token')
  try {
    const response = await axios({
      method: 'get',
      url: '/carts',
      headers: {token},
    })
    return response.data
  } catch (error) {
    throw error
  }
}
