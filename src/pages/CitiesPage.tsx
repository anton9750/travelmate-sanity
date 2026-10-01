import styled from 'styled-components'

import { Container } from '../components/common/Container'
import { EntityGrid } from '../components/common/EntityGrid'
import { QueryState } from '../components/common/QueryState'
import { Section } from '../components/sections/Section'

import { useCitiesGroq } from '../hooks/useCitiesGroq'
import { useLanguage } from '../contexts/LanguageContext'

const Header = styled.div`
  padding: 60px 0 30px;
`

const Title = styled.h1`
  margin: 0 0 12px;

  font-size: clamp(2.2rem, 5vw, 4rem);
`

const Description = styled.p`
  max-width: 700px;
  margin: 0;

  color: ${({ theme }) => theme.muted};

  line-height: 1.7;
`

export function CitiesPage() {
  const { t } = useLanguage()

  const { data, loading, error, reload } = useCitiesGroq()

  const items = data ?? []

  return (
    <Container>
      <Header>
        <Title>{t('cities')}</Title>

        <Description>
          {t('heroSubtitle')}
        </Description>
      </Header>

      <Section title={t('cities')}>
        <QueryState
          loading={loading}
          error={error}
          isEmpty={items.length === 0}
          onRetry={reload}
        >
          <EntityGrid items={items} basePath="/cities" />
        </QueryState>
      </Section>
    </Container>
  )
}
