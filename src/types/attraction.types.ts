// Matcher GROQ-queryen ALL_ATTRACTIONS / attractionBySlug i lib/queries.ts

import type { CityRef } from './city.types'

export type Attraction = {
  _id: string
  name?: string | null
  slug: string
  description?: string | null
  address?: string | null
  image?: string | null
  city?: CityRef | null
}
