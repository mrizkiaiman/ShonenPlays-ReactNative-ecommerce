import {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-community/async-storage'

export default (apiFunction, token) => {
  const [response, setResponse] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const callApi = async () => {
      if (token) {
        // const token = await AsyncStorage.getItem('token')
        const myToken =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmY2EyYTk5YWRhYzgwMTVjYmIzMDZhYiIsImVtYWlsIjoibS5kc2EuYWltYW5AZ21haWwuY29tIiwiaWF0IjoxNjA3NDkyMDIzfQ.MSmLLhR6xH0CvN-gZ4w_QO5sWKLVpukrvfjsWqQ-eOI'
        options.headers = {
          token: myToken,
        }
      }

      try {
        const result = await apiFunction()
        setLoading(false)
        setResponse(result)
      } catch (error) {
        setError(true)
      }
    }

    callApi()
  }, [])

  return {response, loading, error}
}
