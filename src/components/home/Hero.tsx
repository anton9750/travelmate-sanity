import styled from 'styled-components'

import { Container } from '../common/Container'
import { SearchBar } from '../common/SearchBar'
import { useLanguage } from '../../contexts/LanguageContext'

interface HeroProps {
  searchValue: string
  onSearchChange: (value: string) => void
}

const HeroWrapper = styled.section`
  position: relative;

  min-height: 520px;

  display: flex;
  align-items: center;

  background-image:
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(255, 255, 255, 0.75) 35%,
      rgba(255, 255, 255, 0.05) 75%
    ),
    url('/assets/images/hero.png');

  background-size: cover;
  background-position: center;
`

const HeroContent = styled.div`
  max-width: 650px;

  padding: 80px 0;
`

const Title = styled.h1`
  margin: 0 0 18px;

  font-size: clamp(
    2.8rem,
    6vw,
    5rem
  );

  line-height: 1.05;
  letter-spacing: -0.04em;

  color: ${({ theme }) => theme.text};
`

const Subtitle = styled.p`
  max-width: 600px;

  margin: 0 0 32px;

  color: ${({ theme }) => theme.muted};

  font-size: 1.1rem;
  line-height: 1.7;
`

export function Hero({
  searchValue,
  onSearchChange,
}: HeroProps) {
  const { t } = useLanguage()

  return (
    <HeroWrapper>
      <Container>
        <HeroContent>
          <Title>
            {t('heroTitle')}
            <br />
            {t('heroTitleSecond')}
          </Title>

          <Subtitle>
            {t('heroSubtitle')}
            <br />
            {t('heroSubtitleSecond')}
          </Subtitle>

          <SearchBar
            value={searchValue}
            onChange={onSearchChange}
          />
        </HeroContent>
      </Container>
    </HeroWrapper>
  )
}