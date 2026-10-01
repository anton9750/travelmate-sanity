import styled from 'styled-components'

export const Button = styled.button`
  border: 0;
  cursor: pointer;

  border-radius: 999px;
  padding: 12px 18px;

  font-weight: 800;
  font: inherit;

  background: ${({ theme }) => theme.primary};
  color: white;

  transition:
    transform 0.2s,
    opacity 0.2s;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.92;
  }
`