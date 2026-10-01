import { Link, useParams } from 'react-router-dom'

import { Container } from '../components/common/Container'
import { QueryState } from '../components/common/QueryState'
import {
  Back,
  DetailDescription,
  DetailImage,
  DetailTitle,
  DetailWrapper,
  Meta,
} from '../components/common/Detail'

import { useAttractionGroq } from '../hooks/useAttractionGroq'
import { useLanguage } from '../contexts/LanguageContext'

export function LocationDetailPage() {
  const { t } = useLanguage()
  const { slug } = useParams<{ slug: string }>()

  const { data: place, loading, error, reload } = useAttractionGroq(slug)

  return (
    <Container>
      <DetailWrapper>
        <Back to="/locations">← {t('backToPlaces')}</Back>

        <QueryState
          loading={loading}
          error={error}
          isEmpty={!place}
          emptyText={t('placeNotFound')}
          onRetry={reload}
        >
          {place && (
            <>
              {place.image && (
                <DetailImage
                  src={place.image}
                  alt={place.name ?? place.slug}
                />
              )}

              <DetailTitle>
                {place.name ?? place.slug}
              </DetailTitle>

              {place.city && (
                <Meta>
                  <Link to={`/cities/${place.city.slug}`}>
                    {place.city.name ?? place.city.slug}
                  </Link>
                  {place.city.country && (
                    <>
                      {', '}
                      <Link to={`/countries/${place.city.country.slug}`}>
                        {place.city.country.name ?? place.city.country.slug}
                      </Link>
                    </>
                  )}
                </Meta>
              )}

              {place.address && (
                <Meta>
                  {t('address')}: {place.address}
                </Meta>
              )}

              {place.description && (
                <DetailDescription>
                  {place.description}
                </DetailDescription>
              )}
            </>
          )}
        </QueryState>
      </DetailWrapper>
    </Container>
  )
}
