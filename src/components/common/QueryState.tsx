import styled from 'styled-components'

import { ErrorText, State } from './State'
import { useLanguage } from '../../contexts/LanguageContext'

const RetryButton = styled.button`
  display: block;
  margin: 14px auto 0;
  padding: 8px 16px;

  border: 1px solid currentColor;
  border-radius: 10px;

  background: transparent;
  color: inherit;

  cursor: pointer;
  font-weight: 600;
`

interface QueryStateProps {
  loading: boolean
  error: string | null
  isEmpty?: boolean
  emptyText?: string
  onRetry?: () => void
  children: React.ReactNode
}

// Samler loading / fejl / tom-tilstand ét sted, så alle sider håndterer
// CMS-kald ens. Viser kun children når data er klar.
export function QueryState({
  loading,
  error,
  isEmpty = false,
  emptyText,
  onRetry,
  children,
}: QueryStateProps) {
  const { t } = useLanguage()

  if (loading) {
    return <State>{t('loading')}</State>
  }

  if (error) {
    return (
      <ErrorText>
        {t('error')}
        <br />
        <small>{error}</small>

        {onRetry && (
          <RetryButton onClick={onRetry}>
            {t('retry')}
          </RetryButton>
        )}
      </ErrorText>
    )
  }

  if (isEmpty) {
    return <State>{emptyText ?? t('noResults')}</State>
  }

  return <>{children}</>
}
