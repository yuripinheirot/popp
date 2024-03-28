import { ThemeProvider, createTheme } from '@rneui/themed'
import { colors } from './colors'

export const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
    secondary: '#f0c419',
    unselected: colors.surface,
  },
  darkColors: {
    primary: '#1e1e1e',
    secondary: '#f0c419',
    unselected: colors.surface,
  },
  mode: 'dark',
  components: {
    Button: {
      buttonStyle: {
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
      },
      uppercase: true,
    },
  },
})
