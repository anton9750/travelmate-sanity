import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Fælles styling til detaljesiderne (land, by, seværdighed)

export const DetailWrapper = styled.div`
  padding: 60px 0 80px;
`

export const Back = styled(Link)`
  display: inline-block;

  margin-bottom: 28px;

  color: ${({ theme }) => theme.primary};

  text-decoration: none;
  font-weight: 700;
`

export const DetailImage = styled.img`
  display: block;

  width: 100%;
  max-height: 520px;

  object-fit: cover;

  border-radius: 24px;

  margin-bottom: 32px;
`

export const DetailTitle = styled.h1`
  margin: 0 0 16px;

  font-size: clamp(2.4rem, 6vw, 5rem);

  letter-spacing: -0.04em;
`

export const Meta = styled.p`
  margin: 0 0 16px;

  color: ${({ theme }) => theme.muted};

  font-weight: 600;

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
  }
`

export const DetailDescription = styled.p`
  max-width: 800px;

  margin: 0;

  color: ${({ theme }) => theme.muted};

  font-size: 1.1rem;
  line-height: 1.8;
  white-space: pre-line;
`

export const RelatedTitle = styled.h2`
  margin: 56px 0 24px;
`
