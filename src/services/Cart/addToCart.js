import axios from '../axios'
import authStorage from '../../auth/storage'

export default async ({productId, qty}) => {
  const token = await authStorage.getToken()
  try {
    const response = await axios({
      method: 'patch',
      url: '/cart/add',
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
