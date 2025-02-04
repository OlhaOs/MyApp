import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import AuthNavigator from './src/navigation/AuthNavigation';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './src/redux/store/store';
import { Text } from 'react-native-svg';
import { authStateChanged } from './src/utils/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto_Condensed-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto_Condensed-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto_Condensed-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store.store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={store.persistor}>
        <AuthListener />

      </PersistGate>
    </Provider>
  );
}

const AuthListener = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    authStateChanged(dispatch);
  }, [dispatch]);

  return (
    <NavigationContainer>
      {user ? (<BottomTabNavigator />) : (<AuthNavigator />)}

      <StatusBar style='auto' backgroundColor='transparent' />
    </NavigationContainer>
  );
};