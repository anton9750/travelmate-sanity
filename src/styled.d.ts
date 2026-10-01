import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string
    surface: string
    text: string
    muted: string
    primary: string
    primaryDark: string
    border: string
    shadow: string
  }
}
