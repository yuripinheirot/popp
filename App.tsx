import 'react-native-gesture-handler';
import {
  useFonts,
  KumbhSans_100Thin,
  KumbhSans_200ExtraLight,
  KumbhSans_300Light,
  KumbhSans_400Regular,
  KumbhSans_500Medium,
  KumbhSans_600SemiBold,
  KumbhSans_700Bold,
  KumbhSans_800ExtraBold,
  KumbhSans_900Black
} from '@expo-google-fonts/kumbh-sans';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { Contexts } from './src/contexts';
import { Main } from './src/Main';

export default function App() {
  useFonts({
    KumbhSans_100Thin,
    KumbhSans_200ExtraLight,
    KumbhSans_300Light,
    KumbhSans_400Regular,
    KumbhSans_500Medium,
    KumbhSans_600SemiBold,
    KumbhSans_700Bold,
    KumbhSans_800ExtraBold,
    KumbhSans_900Black
  });

  return (
    <Contexts>
      <StatusBar />
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Contexts>
  );
}
