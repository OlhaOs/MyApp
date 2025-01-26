import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import PostsScreen from '../screens/PostsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CommentsScreen from '../screens/CommentsScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Home' component={BottomTabNavigator} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='SignUp' component={RegistrationScreen} />
      {/* <Stack.Screen name='Home' component={PostsScreen} /> */}
      {/* <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='Comment' component={CommentsScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
