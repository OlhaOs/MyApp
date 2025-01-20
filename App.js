import { StatusBar } from 'expo-status-bar';
// import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeIndicator from './src/copmonents/HomeIndicator';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto_Condensed-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto_Condensed-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <LoginScreen />
      {/* <RegistrationScreen /> */}
      <StatusBar style='auto' />
      {/* <ActivityIndicator size="large" /> */}
      <HomeIndicator />
    </>
  );
}
