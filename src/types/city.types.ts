// Matcher GROQ-queryen ALL_CITIES / cityBySlug i lib/queries.ts

import type { CountryRef } from './country.types'

export type CityRef = {
  _id: string
  name?: string | null
  slug: string
  country?: CountryRef | null
}

export type City = {
  _id: string
  name?: string | null
  slug: string
  description?: string | null
  image?: string | null
  country?: CountryRef | null
}
