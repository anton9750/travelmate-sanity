# TravelMate – fra CMS til React

React + TypeScript frontend, der henter lande, byer og seværdigheder fra mit Sanity CMS.

## Kør projektet

```bash
npm install
npm run dev
```

Åbn `http://localhost:5173`.

Endpointet peger på mit Sanity-projekt (`yp6v416b`, dataset `production`) og står i `src/lib/sanity.ts`.
Husk at tilføje `http://localhost:5173` som CORS origin i Sanity (manage → API → CORS origins).

## GROQ eller GraphQL?

Jeg har valgt **GROQ**.

- GROQ er Sanity's eget query-sprog og virker uden ekstra opsætning. GraphQL kræver, at man først deployer en GraphQL-API (`sanity graphql deploy`) og holder den opdateret, hver gang skemaet ændres.
- Jeg kan hente præcis de felter, jeg har brug for, og følge relationer direkte (`country->`, `city->`) i én forespørgsel.
- Reverse-relationer (alle byer i et land, alle seværdigheder i en by) klares med `references(^._id)`.
- Detaljesiderne henter ét dokument via `slug.current`.
- Queries kan testes i Vision og Postman og bruges 1:1 i koden.
- Ingen ekstra pakker – kun `fetch`.

## Opbygning

```
Sanity → GROQ (lib/queries.ts) → fetch i useSanityQuery (endpoint i lib/sanity.ts)
       → useSanityQuery (generisk hook) → use*Groq (specifikke hooks)
       → React-komponenter → bruger
```

| Fil | Ansvar |
| --- | --- |
| `src/lib/sanity.ts` | Sanity Query API endpoint |
| `src/lib/queries.ts` | Alle GROQ-queries samlet ét sted |
| `src/hooks/useSanityQuery.ts` | Generisk Custom Hook: fetch med `?query=` og `encodeURIComponent`, læser `result`, returnerer `data`, `loading`, `error`, `reload` |
| `src/hooks/use*Groq.ts` | Ét hook pr. type: `useCountriesGroq`, `useCountryGroq`, `useCitiesGroq`, `useCityGroq`, `useAttractionsGroq`, `useAttractionGroq` |
| `src/types/*.types.ts` | TypeScript types pr. type (`country`, `city`, `attraction`, `detail`), der matcher queries |
| `src/components/common/QueryState.tsx` | Fælles loading-, fejl- og tom-tilstand |

Page components og sektioner kalder kun hooks – ingen API-kald direkte i komponenterne.

## Relationer (bonus)

- Byside: viser landet, byen tilhører, og byens seværdigheder.
- Landeside: viser landets byer.
- Seværdighedsside: viser adresse, by og land.
- Alle sider har loading-state og fejlhåndtering med "Prøv igen"-knap.

## Bevis for at indholdet kommer fra CMS'et

Ret navn eller beskrivelse på en by i Sanity Studio og tryk **Publish**. Genindlæs siden – ændringen vises uden at røre koden. (Kun publicerede dokumenter hentes.)
