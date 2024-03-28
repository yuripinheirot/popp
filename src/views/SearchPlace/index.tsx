import { createStackNavigator } from '@react-navigation/stack'
import { Text, View } from 'react-native'
import { PlaceTypeStep } from './components/steps/PlaceTypeStep'
import { RangeLocalStep } from './components/steps/RangeLocalStep'
import { SpecialityPlaceStep } from './components/steps/SpecialityPlaceStep'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export const SearchPlaceView = () => {
  return (
    <Stack.Navigator
      initialRouteName='RangeLocalStep'
      screenOptions={{ headerShown: false }}
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
