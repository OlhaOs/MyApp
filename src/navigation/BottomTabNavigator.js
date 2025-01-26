import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../../styles/global';
import ProfileScreen from '../screens/ProfileScreen';
import PostsScreen from '../screens/PostsScreen';
import FooterGrid from '../../assets/icons/FooterGrid';
import User from '../../assets/icons/User';
import CreatePostsScreen from '../screens/CreatePostsScreen';
import Plus from '../../assets/icons/Plus';
import TabIcon from '../components/TabIcon';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Profile'
      screenOptions={({ navigation }) => ({
        headerShown: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: 8,
        },
      })}
    >
      <Tab.Screen
        name='Posts'
        component={PostsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={FooterGrid} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name='CreatePost'
        component={CreatePostsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={Plus} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={User} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.light_gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusedContainer: {
    backgroundColor: colors.orange,
  },
});

export default BottomTabNavigator;
