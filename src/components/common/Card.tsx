import styled from 'styled-components'

export const Card = styled.article`
  background: ${p => p.theme.surface};
  border: 1px solid ${p => p.theme.border};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${p => p.theme.shadow};
  transition: transform .2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  display: block;
`

export const CardBody = styled.div`
  padding: 18px;
`

export const CardTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 1.15rem;
`

export const CardText = styled.p`
  margin: 0;
  color: ${p => p.theme.muted};
  line-height: 1.6;
`

export const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(5, 1fr);

  gap: 18px;


  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
