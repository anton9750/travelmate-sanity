import styled from 'styled-components'

import { Container } from '../components/common/Container'
import { EntityGrid } from '../components/common/EntityGrid'
import { QueryState } from '../components/common/QueryState'
import { Section } from '../components/sections/Section'

import { useAttractionsGroq } from '../hooks/useAttractionsGroq'
import { useLanguage } from '../contexts/LanguageContext'

const Page = styled.main`
  padding: 64px 0;
`

export function LocationsPage() {
  const { t } = useLanguage()

  const { data, loading, error, reload } = useAttractionsGroq()

  const items = data ?? []

  return (
    <Page>
      <Container>
        <Section title={t('selectedPlaces')}>
          <QueryState
            loading={loading}
            error={error}
            isEmpty={items.length === 0}
            onRetry={reload}
          >
            <EntityGrid items={items} basePath="/locations" />
          </QueryState>
        </Section>
      </Container>
    </Page>
  )
}
