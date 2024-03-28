import { createStackNavigator } from '@react-navigation/stack'
import { Text, View } from 'react-native'
import { PlaceTypeStep } from './components/steps/PlaceTypeStep'
import { RangeLocalStep } from './components/steps/RangeLocalStep'
import { SpecialityPlaceStep } from './components/steps/SpecialityPlaceStep'
import { NavigationContainer } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'

export type RootStackParamList = {
  RangeLocalStep: { range: number }
  PlaceTypeStep: { type: string }
  SpecialityPlaceStep: { speciality?: string } | undefined
}

const Stack = createStackNavigator<RootStackParamList>()

export const SearchPlaceView = () => {
  return (
    <Stack.Navigator
      initialRouteName='RangeLocalStep'
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name='RangeLocalStep'
        component={RangeLocalStep}
      />
      <Stack.Screen
        name='PlaceTypeStep'
        component={PlaceTypeStep}
      />
      <Stack.Screen
        name='SpecialityPlaceStep'
        component={SpecialityPlaceStep}
      />
    </Stack.Navigator>
  )
}
