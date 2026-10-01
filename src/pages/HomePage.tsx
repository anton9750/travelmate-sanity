import { useState } from 'react'

import { Hero } from '../components/home/Hero'
import { CountrySection } from '../components/home/CountrySection'
import { CitySection } from '../components/home/CitySection'
import { PlaceSection } from '../components/home/PlaceSection'
import { SearchResults } from '../components/home/SearchResults'

import { useAttractionsGroq } from '../hooks/useAttractionsGroq'
import { useCitiesGroq } from '../hooks/useCitiesGroq'
import { useCountriesGroq } from '../hooks/useCountriesGroq'

export function HomePage() {
  const [query, setQuery] = useState('')

  // Data hentes ét sted og deles med sektioner + søgning
  const countries = useCountriesGroq()
  const cities = useCitiesGroq()
  const places = useAttractionsGroq()

  return (
    <>
      <Hero
        searchValue={query}
        onSearchChange={setQuery}
      />

      <CountrySection
        items={countries.data ?? []}
        loading={countries.loading}
        error={countries.error}
        onRetry={countries.reload}
      />

      <CitySection
        items={cities.data ?? []}
        loading={cities.loading}
        error={cities.error}
        onRetry={cities.reload}
      />

      <PlaceSection
        items={places.data ?? []}
        loading={places.loading}
        error={places.error}
        onRetry={places.reload}
      />

      <SearchResults
        query={query}
        countries={countries.data ?? []}
        cities={cities.data ?? []}
        places={places.data ?? []}
      />
    </>
  )
}
