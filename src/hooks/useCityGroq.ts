import { cityBySlug } from '../lib/queries'
import { useSanityQuery } from './useSanityQuery'

import type { CityDetail } from '../types/detail.types'

export const useCityGroq = (slug?: string) =>
  useSanityQuery<CityDetail>(slug ? cityBySlug(slug) : null)
