import axios from '../axios'

export default async (categoryId) => {
  try {
    const response = await axios({
      method: 'get',
      url: `/products/${categoryId}`,
    })
    return response.data
  } catch (error) {
    throw error
  }
}
