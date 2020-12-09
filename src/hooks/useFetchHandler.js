import {useState, useEffect} from 'react'
import axios from '../services/axios'
import AsyncStorage from '@react-native-community/async-storage'

export default (options, token) => {
  const [response, setResponse] = useState([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        // const token = await AsyncStorage.getItem('token')
        const token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmY2EyYTk5YWRhYzgwMTVjYmIzMDZhYiIsImVtYWlsIjoibS5kc2EuYWltYW5AZ21haWwuY29tIiwiaWF0IjoxNjA3NDkyMDIzfQ.MSmLLhR6xH0CvN-gZ4w_QO5sWKLVpukrvfjsWqQ-eOI'
        options.headers = {
          token,
        }
      }

      axios(options)
        .then(({data}) => {
          setResponse(data)
          setIsLoading(false)
        })
        .catch((err) => {
          setError(true)
          setIsLoading(false)
        })
    }

    fetchData()
  }, [])

  return {response, error, isLoading}
}
