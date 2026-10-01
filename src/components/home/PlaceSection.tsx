import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Container } from '../common/Container'
import { EntityGrid } from '../common/EntityGrid'
import { QueryState } from '../common/QueryState'
import { Section } from '../sections/Section'

import { useLanguage } from '../../contexts/LanguageContext'

import type { Attraction } from '../../types/attraction.types'

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;
`

const ViewAll = styled(Link)`
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
`

interface PlaceSectionProps {
  items: Attraction[]
  loading: boolean
  error: string | null
  onRetry?: () => void
}

export function PlaceSection({
  items,
  loading,
  error,
  onRetry,
}: PlaceSectionProps) {
  const { t } = useLanguage()

  return (
    <Section title={t('selectedPlaces')}>
      <Container>
        <SectionHeader>
          <ViewAll to="/locations">
            {t('viewAll')} →
          </ViewAll>
        </SectionHeader>

        <QueryState
          loading={loading}
          error={error}
          isEmpty={items.length === 0}
          onRetry={onRetry}
        >
          <EntityGrid items={items.slice(0, 5)} basePath="/locations" />
        </QueryState>
      </Container>
    </Section>
  )
}
