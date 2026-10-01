import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import { Layout } from './components/layout/Layout'

import { HomePage } from './pages/HomePage'

import { CountriesPage } from './pages/CountriesPage'
import { CountryDetailPage } from './pages/CountryDetailPage'

import { CitiesPage } from './pages/CitiesPage'
import { CityDetailPage } from './pages/CityDetailPage'

import { LocationsPage } from './pages/LocationsPage'
import { LocationDetailPage } from './pages/LocationDetailPage'

export function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/countries"
          element={<CountriesPage />}
        />

        <Route
          path="/countries/:slug"
          element={<CountryDetailPage />}
        />

        <Route
          path="/cities"
          element={<CitiesPage />}
        />

        <Route
          path="/cities/:slug"
          element={<CityDetailPage />}
        />

        <Route
          path="/locations"
          element={<LocationsPage />}
        />

        <Route
          path="/locations/:slug"
          element={<LocationDetailPage />}
        />

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />
      </Routes>
    </Layout>
  )
}