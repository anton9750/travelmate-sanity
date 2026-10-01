import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family:
      Inter,
      ui-sans-serif,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      sans-serif;

    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  button,
  input {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`