import {useState, useEffect} from 'react'
import axios from '../services/axios'

export default (options) => {
  const [response, setResponse] = useState([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
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
