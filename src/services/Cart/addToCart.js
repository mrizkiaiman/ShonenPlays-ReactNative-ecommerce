import axios from '../axios'
import AsyncStorage from '@react-native-community/async-storage'

export default async (productId, qty) => {
  // const token = await AsyncStorage.getItem('token')
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmY2EyYTk5YWRhYzgwMTVjYmIzMDZhYiIsImVtYWlsIjoibS5kc2EuYWltYW5AZ21haWwuY29tIiwiaWF0IjoxNjA3NDkyMDIzfQ.MSmLLhR6xH0CvN-gZ4w_QO5sWKLVpukrvfjsWqQ-eOI'
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
