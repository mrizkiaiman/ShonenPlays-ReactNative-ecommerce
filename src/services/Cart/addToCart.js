import axios from '../axios'
import AsyncStorage from '@react-native-community/async-storage'

export default async (id) => {
  const token = await AsyncStorage.getItem('token')
  try {
    const response = await axios({
      method: 'post',
      url: '/login',
      data: {
        email,
        password,
      },
      headers: {token},
    })
    return response.data
  } catch (error) {
    throw error
  }
}
