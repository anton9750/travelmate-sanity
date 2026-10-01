import { ALL_COUNTRIES } from '../lib/queries'
import { useSanityQuery } from './useSanityQuery'

import type { Country } from '../types/country.types'

export const useCountriesGroq = () =>
  useSanityQuery<Country[]>(ALL_COUNTRIES)
