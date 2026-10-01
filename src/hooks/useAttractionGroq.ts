import { attractionBySlug } from '../lib/queries'
import { useSanityQuery } from './useSanityQuery'

import type { AttractionDetail } from '../types/detail.types'

export const useAttractionGroq = (slug?: string) =>
  useSanityQuery<AttractionDetail>(slug ? attractionBySlug(slug) : null)
