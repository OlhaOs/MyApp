import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import HomeIndicator from './src/components/HomeIndicator';
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';
import PostsScreen from './src/screens/PostsScreen';
import CreatePostsScreen from './src/screens/CreatePostsScreen';
import CommentsScreen from './src/screens/CommentsScreen';
import AuthNavigator from './src/navigation/AuthNavigation';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto_Condensed-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto_Condensed-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto_Condensed-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      {isLoggedIn ? <BottomTabNavigator /> : <AuthNavigator />}
      {/* <CommentsScreen /> */}
      {/* <CreatePostsScreen /> */}
      {/* <PostsScreen /> */}
      {/* <LoginScreen /> */}

      {/* <RegistrationScreen /> */}
      <StatusBar style='auto' />
      {/* <HomeIndicator /> */}
    </NavigationContainer>
  );
}
