import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import PostsScreen from '../screens/PostsScreen';
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
        options={{
          title: 'First Screen',
          //   headerRightContainerStyle: { paddingRight: 8 },
          //   headerRight: () => <LogoutButton />,
        }}
      />
      <Stack.Screen
        name='SignUp'
        component={RegistrationScreen}
        options={{
          title: 'Second Screen',
        }}
      />
      <Stack.Screen name='Home' component={PostsScreen} options={{}} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
