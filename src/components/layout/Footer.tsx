import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Container } from '../common/Container'

const FooterWrapper = styled.footer`
  margin-top: 70px;

  border-top: 1px solid ${({ theme }) => theme.border};
`

const FooterInner = styled(Container)`
  min-height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;

    padding: 25px 0;
  }
`

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  font-weight: 800;
`

const Tagline = styled.span`
  color: ${({ theme }) => theme.muted};

  font-size: 0.8rem;
  font-weight: 400;
`

const Links = styled.div`
  display: flex;
  gap: 22px;

  color: ${({ theme }) => theme.muted};

  font-size: 0.8rem;
`

export function Footer() {
  return (
    <FooterWrapper>
      <FooterInner>
        <Brand>
          TravelMate
          <Tagline>
            Explore. Discover. Belong.
          </Tagline>
        </Brand>

        <Links>
          <Link to="/about">About</Link>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>

          <span>◎</span>
          <span>●</span>
          <span>▶</span>
        </Links>
      </FooterInner>
    </FooterWrapper>
  )
}