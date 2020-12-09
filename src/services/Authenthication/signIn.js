import axios from '../axios'

export default async (productId, qty) => {
  try {
    const response = await axios({
      method: 'patch',
      url: '/carts/remove',
      params: {
        productId,
      },
    })
    return response.data
  } catch (error) {
    throw error
  }
}
