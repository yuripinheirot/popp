import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Button } from '@rneui/themed'
import { Contexts } from './src/contexts'

export default function App() {
  return (
    <Contexts>
      <SafeAreaView className='flex-1 items-center justify-center '>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style='auto' />
        <Button color='secondary'>asdads</Button>
      </SafeAreaView>
    </Contexts>
  )
}
