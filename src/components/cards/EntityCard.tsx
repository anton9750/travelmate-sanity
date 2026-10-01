import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled(Link)`
  display: block;
  overflow: hidden;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 18px;
  box-shadow: ${({ theme }) => theme.shadow};
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: 220px;
  object-fit: cover;
`

const Content = styled.div`
  padding: 18px;
`

const Title = styled.h3`
  margin: 0 0 8px;
`

const Text = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.muted};
  line-height: 1.5;
`

interface EntityCardProps {
  to: string
  image?: string | null
  title: string
  text?: string | null
}

export function EntityCard({
  to,
  image,
  title,
  text,
}: EntityCardProps) {
  return (
    <Card to={to}>
      {image && (
        <Image
          src={image}
          alt={title}
        />
      )}

      <Content>
        <Title>{title}</Title>

        {text && (
          <Text>{text}</Text>
        )}
      </Content>
    </Card>
  )
}