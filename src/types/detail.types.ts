// Detaljesider med relationer (bonus): land med byer, by med seværdigheder

import type { Attraction } from './attraction.types'
import type { City } from './city.types'
import type { Country } from './country.types'

export type CountryDetail = Country & {
  cities: Omit<City, 'country'>[]
}

export type CityDetail = City & {
  attractions: Omit<Attraction, 'city'>[]
}

export type AttractionDetail = Attraction
