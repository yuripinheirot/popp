import { ThemeProvider } from '@rneui/themed'
import { PropsWithChildren } from 'react'
import { theme } from '../constants/theme'

export const Contexts = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
