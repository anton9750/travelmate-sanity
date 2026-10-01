import styled from 'styled-components'

export const State = styled.div`
  padding: 48px 10px;

  text-align: center;

  color: ${({ theme }) => theme.muted};
`

export const ErrorText = styled(State)`
  color: #d95c5c;
`