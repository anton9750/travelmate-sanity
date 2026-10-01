import styled from 'styled-components'

import { Container } from '../common/Container'
import { Navigation } from './Navigation'
import { ThemeToggle } from './ThemeToggle'

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;

  background: ${({ theme }) => theme.surface};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`

const HeaderInner = styled(Container)`
  min-height: 58px;

  display: flex;
  align-items: center;
  gap: 30px;
`

const Logo = styled.div`
  font-size: 1.55rem;
  font-weight: 800;
  white-space: nowrap;
`

const LogoAccent = styled.span`
  color: #1769e8;
`

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo>
          ✈ Travel<LogoAccent>Mate</LogoAccent>
        </Logo>

        <Navigation />

        <ThemeToggle />
      </HeaderInner>
    </HeaderWrapper>
  )
}