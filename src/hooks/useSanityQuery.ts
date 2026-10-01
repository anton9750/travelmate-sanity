import { useEffect, useState } from 'react'

import { API_URL } from '../lib/sanity'

// Generisk Custom Hook til GROQ – samme opbygning som i lektionen,
// men med type T, loading og error, så det kan bruges til alle data.
// Send null som query for at springe hentning over.
export function useSanityQuery<T>(query: string | null) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(Boolean(query))
  const [error, setError] = useState<string | null>(null)

  const getData = async () => {
    if (!query) {
      setData(null)
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)

    try {
      const url = `${API_URL}?query=${encodeURIComponent(query)}`

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`Request failed (${response.status})`)
      }

      const json = await response.json()

      // Sanity returnerer data i result
      setData(json.result ?? null)
    } catch (err) {
      setData(null)
      setError(err instanceof Error ? err.message : 'Request failed')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [query])

  return { data, loading, error, reload: getData }
}
