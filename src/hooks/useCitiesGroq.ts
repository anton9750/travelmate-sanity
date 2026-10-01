import { ALL_CITIES } from '../lib/queries'
import { useSanityQuery } from './useSanityQuery'

import type { City } from '../types/city.types'

export const useCitiesGroq = () =>
  useSanityQuery<City[]>(ALL_CITIES)
