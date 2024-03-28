import { ThemeProvider, createTheme } from '@rneui/themed'

export const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
    secondary: '#f0c419',
  },
  darkColors: {
    primary: '#1e1e1e',
    secondary: '#f0c419',
  },
  mode: 'dark',
})
