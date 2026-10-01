
import styled from 'styled-components'

import { useAppTheme } from '../../contexts/ThemeContext'
import { useLanguage } from '../../contexts/LanguageContext'

const Wrapper = styled.div`
  display: flex;

  padding: 3px;

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 18px;

  background: ${({ theme }) => theme.background};
`

const Button = styled.button<{ $active: boolean }>`
  padding: 8px 13px;

  border: none;
  border-radius: 15px;

  background: ${({ $active, theme }) =>
    $active
      ? theme.text
      : 'transparent'};

  color: ${({ $active, theme }) =>
    $active
      ? theme.surface
      : theme.text};

  cursor: pointer;

  font-weight: 600;
`

export function ThemeToggle() {
  const { mode, toggle } = useAppTheme()
  const { t } = useLanguage()

  return (
    <Wrapper>
      <Button
        $active={mode === 'light'}
        onClick={() =>
          mode === 'dark' && toggle()
        }
      >
        ☼ {t('light')}
      </Button>

      <Button
        $active={mode === 'dark'}
        onClick={() =>
          mode === 'light' && toggle()
        }
      >
        ◐ {t('dark')}
      </Button>
    </Wrapper>
  )
}