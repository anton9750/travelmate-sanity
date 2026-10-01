import { Link, useParams } from 'react-router-dom'

import { Container } from '../components/common/Container'
import { EntityGrid } from '../components/common/EntityGrid'
import { QueryState } from '../components/common/QueryState'
import {
  Back,
  DetailDescription,
  DetailImage,
  DetailTitle,
  DetailWrapper,
  Meta,
  RelatedTitle,
} from '../components/common/Detail'

import { useCityGroq } from '../hooks/useCityGroq'
import { useLanguage } from '../contexts/LanguageContext'

export function CityDetailPage() {
  const { t } = useLanguage()
  const { slug } = useParams<{ slug: string }>()

  const { data: city, loading, error, reload } = useCityGroq(slug)

  return (
    <Container>
      <DetailWrapper>
        <Back to="/cities">← {t('backToCities')}</Back>

        <QueryState
          loading={loading}
          error={error}
          isEmpty={!city}
          emptyText={t('cityNotFound')}
          onRetry={reload}
        >
          {city && (
            <>
              {city.image && (
                <DetailImage
                  src={city.image}
                  alt={city.name ?? city.slug}
                />
              )}

              <DetailTitle>
                {city.name ?? city.slug}
              </DetailTitle>

              {city.country && (
                <Meta>
                  {t('country')}:{' '}
                  <Link to={`/countries/${city.country.slug}`}>
                    {city.country.name ?? city.country.slug}
                  </Link>
                </Meta>
              )}

              {city.description && (
                <DetailDescription>
                  {city.description}
                </DetailDescription>
              )}

              {city.attractions.length > 0 && (
                <>
                  <RelatedTitle>
                    {t('attractionsInCity')}
                  </RelatedTitle>

                  <EntityGrid
                    items={city.attractions}
                    basePath="/locations"
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
