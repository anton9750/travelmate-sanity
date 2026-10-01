import { useEffect, useState } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key)
      return raw ? JSON.parse(raw) as T : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(value)) } catch {}
  }, [key, value])

  function update(next: T | ((current: T) => T)) {
    setValue(current => typeof next === 'function'
      ? (next as (current: T) => T)(current)
      : next)
  }

  return [value, update] as const
}