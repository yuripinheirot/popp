import { ThemeProvider } from '@rneui/themed'
import { PropsWithChildren } from 'react'
import { theme } from '../constants/theme'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export const Contexts = ({ children }: PropsWithChildren) => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SafeAreaProvider>
  )
}
