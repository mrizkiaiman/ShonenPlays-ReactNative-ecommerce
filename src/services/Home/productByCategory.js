import axios from '../axios'

export default async (categoryId) => {
  try {
    const response = await axios({
      method: 'get',
      url: `/products/category/${categoryId}`,
    })
    console.log('=====================================')
    console.log(response.data)
    return response.data
  } catch (error) {
    throw error
  }
}
