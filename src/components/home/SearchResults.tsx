import styled from 'styled-components'

import { Container } from '../common/Container'
import { Grid } from '../common/Card'
import { State } from '../common/State'
import { EntityCard } from '../cards/EntityCard'
import { Section } from '../sections/Section'

import { useLanguage } from '../../contexts/LanguageContext'

import type { Attraction } from '../../types/attraction.types'
import type { City } from '../../types/city.types'
import type { Country } from '../../types/country.types'

interface SearchResultsProps {
  query: string
  countries: Country[]
  cities: City[]
  places: Attraction[]
}

const ResultCount = styled.p`
  margin: -12px 0 24px;
  color: ${({ theme }) => theme.muted};
`

export function SearchResults({
  query,
  countries,
  cities,
  places,
}: SearchResultsProps) {
  const { t } = useLanguage()

  const text = query.trim().toLowerCase()

  if (!text) {
    return null
  }

  const results = [
    ...countries.map(item => ({
      type: 'country',
      id: item.slug,
      title: item.name ?? item.countryCode ?? item.slug,
      image: item.image,
      text: item.description ?? '',
    })),

    ...cities.map(item => ({
      type: 'city',
      id: item.slug,
      title: item.name ?? item.slug,
      image: item.image,
      text: item.description ?? '',
    })),

    ...places.map(item => ({
      type: 'attraction',
      id: item.slug,
      title: item.name ?? item.slug,
      image: item.image,
      text: item.description ?? '',
    })),
  ].filter(item =>
    `${item.title} ${item.text}`
      .toLowerCase()
      .includes(text),
  )

  return (
    <Section title={t('search')}>
      <Container>
        {results.length ? (
          <>
            <ResultCount>
              {results.length} {t('all')}
            </ResultCount>

            <Grid>
              {results.map(item => (
                <EntityCard
                  key={`${item.type}-${item.id}`}
                  to={
                    item.type === 'attraction'
                      ? `/locations/${item.id}`
                      : item.type === 'country'
                        ? `/countries/${item.id}`
                        : `/cities/${item.id}`
                  }
                  image={item.image}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </Grid>
          </>
        ) : (
          <State>{t('noResults')}</State>
        )}
      </Container>
    </Section>
  )
}