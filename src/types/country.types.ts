// Matcher GROQ-queryen ALL_COUNTRIES / countryBySlug i lib/queries.ts

export type CountryRef = {
  _id: string
  name?: string | null
  slug: string
}

export type Country = {
  _id: string
  name?: string | null
  countryCode?: string | null
  slug: string
  description?: string | null
  image?: string | null
}
