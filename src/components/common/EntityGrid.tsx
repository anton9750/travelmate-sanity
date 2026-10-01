import { Grid } from './Card'
import { EntityCard } from '../cards/EntityCard'

interface Item {
  _id: string
  slug: string
  name?: string | null
  description?: string | null
  image?: string | null
}

// Genbrugelig grid af cards til lande, byer og seværdigheder.
export function EntityGrid({
  items,
  basePath,
}: {
  items: Item[]
  basePath: '/countries' | '/cities' | '/locations'
}) {
  return (
    <Grid>
      {items.map((item) => (
        <EntityCard
          key={item._id}
          to={`${basePath}/${item.slug}`}
          image={item.image}
          title={item.name ?? item.slug}
          text={item.description}
        />
      ))}
    </Grid>
  )
}
