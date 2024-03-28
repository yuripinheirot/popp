import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { Contexts } from './src/contexts'
import { NavigationContainer } from '@react-navigation/native'
import { Main } from './src/Main'
import { Text } from 'react-native'

export default function App() {
  return (
    <Contexts>
      <StatusBar />
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Contexts>
  )
}
