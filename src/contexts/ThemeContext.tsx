import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import type { ThemeMode } from '../types'

const palette = {
  light: {
    background: '#f7faf9',
    surface: '#ffffff',
    text: '#12201f',
    muted: '#647472',
    primary: '#0f766e',
    primaryDark: '#0b5f59',
    border: '#e4ecea',
    shadow: '0 12px 35px rgba(16, 52, 48, .10)',
  },

  dark: {
    background: '#0b1514',
    surface: '#12201e',
    text: '#edf7f5',
    muted: '#9eb2ae',
    primary: '#4fd1c5',
    primaryDark: '#35b7aa',
    border: '#243633',
    shadow: '0 12px 35px rgba(0, 0, 0, .28)',
  },
}

const Context = createContext<{
  mode: ThemeMode
  theme: typeof palette.light
  toggle: () => void
}>({
  mode: 'light',
  theme: palette.light,
  toggle: () => {},
})

export function AppThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [mode, setMode] = useLocalStorage<ThemeMode>(
    'travelmate-theme',
    'light',
  )

  const theme = palette[mode]

  const value = {
    mode,
    theme,
    toggle: () => {
      setMode((currentMode) =>
        currentMode === 'light' ? 'dark' : 'light',
      )
    },
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export const useAppTheme = () => useContext(Context)