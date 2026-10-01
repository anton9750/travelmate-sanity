import { ALL_ATTRACTIONS } from '../lib/queries'
import { useSanityQuery } from './useSanityQuery'

import type { Attraction } from '../types/attraction.types'

export const useAttractionsGroq = () =>
  useSanityQuery<Attraction[]>(ALL_ATTRACTIONS)
