import {useState, useEffect} from 'react'

export default (method) => {
  const [response, setResponse] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await method()
        setResponse(data)
        setIsLoading(false)
      } catch (error) {
        setError(true)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return {response, error, isLoading}
}
