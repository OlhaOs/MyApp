import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import PostsScreen from '../screens/PostsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CommentsScreen from '../screens/CommentsScreen';
// import LogoutButton from "../components/LogoutButton";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={
          {
            //   headerRightContainerStyle: { paddingRight: 8 },
            //   headerRight: () => <LogoutButton />,
          }
        }
      />
      <Stack.Screen
        name='SignUp'
        component={RegistrationScreen}
        options={{
          title: 'Second Screen',
        }}
      />
      <Stack.Screen name='Home' component={PostsScreen} options={{}} />
      <Stack.Screen name='Profile' component={ProfileScreen} options={{}} />
      <Stack.Screen name='Comment' component={CommentsScreen} options={{}} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
