import styled from 'styled-components'

import { useLanguage } from '../../contexts/LanguageContext'

const Wrap = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;
  max-width: 555px;

  padding: 6px 6px 6px 14px;

  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;

  box-shadow: ${({ theme }) => theme.shadow};
`

const SearchIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  font-size: 20px;
  color: ${({ theme }) => theme.text};
`

const Input = styled.input`
  flex: 1;

  min-width: 0;

  padding: 10px 4px;

  border: 0;
  outline: 0;

  background: transparent;
  color: ${({ theme }) => theme.text};

  font-size: 14px;

  &::placeholder {
    color: ${({ theme }) => theme.muted};
  }
`

const Submit = styled.button`
  flex-shrink: 0;

  padding: 11px 28px;

  border: 0;
  border-radius: 8px;

  background: #1268e8;
  color: white;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #0f5dcc;
    transform: translateY(-1px);
  }
`

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  const { t } = useLanguage()

  return (
    <Wrap
      onSubmit={(event) =>
        event.preventDefault()
      }
    >
      <SearchIcon>
        ⌕
      </SearchIcon>

      <Input
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={t('search')}
      />

      <Submit type="submit">
        {t('searchButton')}
      </Submit>
    </Wrap>
  )
}