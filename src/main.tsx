import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
} from 'react-router-dom'
import {
  ThemeProvider,
} from 'styled-components'

import { App } from './App'

import {
  AppThemeProvider,
  useAppTheme,
} from './contexts/ThemeContext'

import {
  LanguageProvider,
} from './contexts/LanguageContext'

import {
  GlobalStyle,
} from './styles/GlobalStyle'

function ThemedApp() {
  const { theme } = useAppTheme()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(
  document.getElementById('root')!,
).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppThemeProvider>
        <LanguageProvider>
          <ThemedApp />
        </LanguageProvider>
      </AppThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)