import { ThemeProvider } from '@rneui/themed'
import { PropsWithChildren } from 'react'
import { theme } from '../constants/theme'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const Contexts = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient()

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
