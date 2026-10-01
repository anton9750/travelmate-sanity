import { countryBySlug } from '../lib/queries'
import { useSanityQuery } from './useSanityQuery'

import type { CountryDetail } from '../types/detail.types'

export const useCountryGroq = (slug?: string) =>
  useSanityQuery<CountryDetail>(slug ? countryBySlug(slug) : null)
