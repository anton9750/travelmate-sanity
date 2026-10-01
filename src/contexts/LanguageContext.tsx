import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import type { LanguageCode } from '../types'

const texts = {
  en: {
    home: 'Home',

    heroTitle: 'Explore the World',
    heroTitleSecond: 'with TravelMate',

    heroSubtitle:
      'Discover amazing places, cities and countries.',
    heroSubtitleSecond:
      'Your next adventure is just a click away.',

    countries: 'Countries',
    cities: 'Cities',
    places: 'Places',
    about: 'About',

    explore: 'Explore',

    search:
      'Search for countries, cities or places...',
    searchButton: 'Search',

    popularCountries: 'Popular countries',
    featuredCities: 'Popular cities',
    selectedPlaces: 'Featured places',

    viewAll: 'View all',

    details: 'View details',
    back: 'Back',
    backToCountries: 'Back to countries',
    backToCities: 'Back to cities',
    backToPlaces: 'Back to places',

    learnMore: 'Learn more',

    noResults: 'No results found.',
    countryNotFound: 'Country not found.',
    cityNotFound: 'City not found.',
    placeNotFound: 'Place not found.',

    loading: 'Loading...',

    error:
      'Could not reach the CMS. Please try again.',

    light: 'Light',
    dark: 'Dark',

    all: 'All destinations',

    address: 'Address',
    website: 'Website',
    language: 'Language',

    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',

    tagline: 'Explore. Discover. Belong.',

    country: 'Country',
    city: 'City',
    citiesInCountry: 'Cities in this country',
    attractionsInCity: 'Things to see in this city',
    retry: 'Try again',
  },

  da: {
    home: 'Hjem',

    heroTitle: 'Udforsk verden',
    heroTitleSecond: 'med TravelMate',

    heroSubtitle:
      'Oplev fantastiske steder, byer og lande.',
    heroSubtitleSecond:
      'Dit næste eventyr er kun et klik væk.',

    countries: 'Lande',
    cities: 'Byer',
    places: 'Steder',
    about: 'Om',

    explore: 'Udforsk',

    search:
      'Søg efter lande, byer eller steder...',
    searchButton: 'Søg',

    popularCountries: 'Populære lande',
    featuredCities: 'Populære byer',
    selectedPlaces: 'Udvalgte steder',

    viewAll: 'Se alle',

    details: 'Se detaljer',
    back: 'Tilbage',
    backToCountries: 'Tilbage til lande',
    backToCities: 'Tilbage til byer',
    backToPlaces: 'Tilbage til steder',

    learnMore: 'Læs mere',

    noResults: 'Ingen resultater.',
    countryNotFound: 'Land ikke fundet.',
    cityNotFound: 'By ikke fundet.',
    placeNotFound: 'Sted ikke fundet.',

    loading: 'Indlæser...',

    error:
      'Kunne ikke kontakte CMS’et. Prøv igen.',

    light: 'Lys',
    dark: 'Mørk',

    all: 'Alle destinationer',

    address: 'Adresse',
    website: 'Hjemmeside',
    language: 'Sprog',

    contact: 'Kontakt',
    privacy: 'Privatliv',
    terms: 'Vilkår',

    tagline: 'Udforsk. Oplev. Hør til.',

    country: 'Land',
    city: 'By',
    citiesInCountry: 'Byer i dette land',
    attractionsInCity: 'Seværdigheder i denne by',
    retry: 'Prøv igen',
  },
}

type Keys = keyof typeof texts.en

const Context = createContext<{
  language: LanguageCode
  t: (key: Keys) => string
  setLanguage: (language: LanguageCode) => void
}>({
  language: 'en',
  t: (key) => texts.en[key],
  setLanguage: () => {},
})

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [language, setLanguage] =
    useLocalStorage<LanguageCode>(
      'travelmate-language',
      'en',
    )

  const value = {
    language,
    setLanguage,

    t: (key: Keys) => texts[language][key],
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export const useLanguage = () =>
  useContext(Context)