import axios from '../axios'

export default async (email, password) => {
  try {
    const response = await axios({
      method: 'post',
      url: '/login',
      data: {
        email,
        password,
      },
    })
    return response.data
  } catch (error) {
    throw error
  }
}
