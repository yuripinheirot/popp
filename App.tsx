import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '@rneui/themed'
import { Contexts } from './src/contexts'

export default function App() {
  return (
    <Contexts>
      <View className='flex-1 items-center justify-center '>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style='auto' />
        <Button color='secondary'>asdads</Button>
      </View>
    </Contexts>
  )
}
