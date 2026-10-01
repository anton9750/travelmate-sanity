import { useParams } from 'react-router-dom'

import { Container } from '../components/common/Container'
import { EntityGrid } from '../components/common/EntityGrid'
import { QueryState } from '../components/common/QueryState'
import {
  Back,
  DetailDescription,
  DetailImage,
  DetailTitle,
  DetailWrapper,
  RelatedTitle,
} from '../components/common/Detail'

import { useCountryGroq } from '../hooks/useCountryGroq'
import { useLanguage } from '../contexts/LanguageContext'

export function CountryDetailPage() {
  const { t } = useLanguage()
  const { slug } = useParams<{ slug: string }>()

  const { data: country, loading, error, reload } = useCountryGroq(slug)

  return (
    <Container>
      <DetailWrapper>
        <Back to="/countries">← {t('backToCountries')}</Back>

        <QueryState
          loading={loading}
          error={error}
          isEmpty={!country}
          emptyText={t('countryNotFound')}
          onRetry={reload}
        >
          {country && (
            <>
              {country.image && (
                <DetailImage
                  src={country.image}
                  alt={country.name ?? country.slug}
                />
              )}

              <DetailTitle>
                {country.name ?? country.slug}
              </DetailTitle>

              {country.description && (
                <DetailDescription>
                  {country.description}
                </DetailDescription>
              )}

              {country.cities.length > 0 && (
                <>
                  <RelatedTitle>
                    {t('citiesInCountry')}
                  </RelatedTitle>

                  <EntityGrid
                    items={country.cities}
                    basePath="/cities"
                  />
                </>
              )}
            </>
          )}
        </QueryState>
      </DetailWrapper>
    </Container>
  )
}
