import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Button } from '@rneui/themed'
import { Contexts } from './src/contexts'
import { SearchPlaceView } from './src/views/SearchPlace'

export default function App() {
  return (
    <Contexts>
      <SafeAreaView className='flex-1 items-center justify-center '>
        <SearchPlaceView />
      </SafeAreaView>
    </Contexts>
  )
}
