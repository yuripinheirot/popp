import { createStackNavigator } from '@react-navigation/stack';

import { KeyValue } from '../../protocols/key-value.type';
import { PlaceTypeStep } from './components/steps/PlaceTypeStep';
import { RangeLocalStep } from './components/steps/RangeLocalStep';
import { ResultsStep } from './components/steps/ResultsStep';
import { SpecialityPlaceStep } from './components/steps/SpecialityPlaceStep';

export type RootStackParamList = {
  RangeLocalStep: undefined;
  PlaceTypeStep: { range: number } | undefined;
  SpecialityPlaceStep:
    | { range: number; type: string; specialities: KeyValue[] }
    | undefined;
  ResultsStep: { range: number; type: string; keyword?: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export const SearchPlaceView = () => {
  return (
    <Stack.Navigator
      initialRouteName="RangeLocalStep"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="RangeLocalStep" component={RangeLocalStep} />
      <Stack.Screen name="PlaceTypeStep" component={PlaceTypeStep} />
      <Stack.Screen
        name="SpecialityPlaceStep"
        component={SpecialityPlaceStep}
      />
      <Stack.Screen name="ResultsStep" component={ResultsStep} />
    </Stack.Navigator>
  );
};
