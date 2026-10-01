// Alle GROQ-queries samlet ét sted.
// "image.asset->url" giver en færdig billed-URL fra Sanity.

const countryFields = `
  _id,
  name,
  countryCode,
  "slug": slug.current,
  description,
  "image": image.asset->url
`

const cityFields = `
  _id,
  name,
  "slug": slug.current,
  description,
  "image": image.asset->url,
  "country": country->{ _id, name, "slug": slug.current }
`

const attractionFields = `
  _id,
  name,
  "slug": slug.current,
  description,
  address,
  "image": image.asset->url,
  "city": city->{
    _id,
    name,
    "slug": slug.current,
    "country": country->{ _id, name, "slug": slug.current }
  }
`

// ---------- Lister ----------
export const ALL_COUNTRIES = `*[_type == "country"]{ ${countryFields} }`
export const ALL_CITIES = `*[_type == "city"]{ ${cityFields} }`
export const ALL_ATTRACTIONS = `*[_type == "attraction"]{ ${attractionFields} }`

// ---------- Detaljer med relationer (slug sættes ind i queryen) ----------
export const countryBySlug = (slug: string) => `
  *[_type == "country" && slug.current == ${JSON.stringify(slug)}][0]{
    ${countryFields},
    "cities": *[_type == "city" && references(^._id)]{
      _id, name, "slug": slug.current, description, "image": image.asset->url
    }
  }
`

export const cityBySlug = (slug: string) => `
  *[_type == "city" && slug.current == ${JSON.stringify(slug)}][0]{
    ${cityFields},
    "attractions": *[_type == "attraction" && references(^._id)]{
      _id, name, "slug": slug.current, description, address, "image": image.asset->url
    }
  }
`

export const attractionBySlug = (slug: string) => `
  *[_type == "attraction" && slug.current == ${JSON.stringify(slug)}][0]{
    ${attractionFields}
  }
`
