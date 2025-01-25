import { StatusBar } from 'expo-status-bar';
// import RegistrationScreen from './src/screens/RegistrationScreen';
// import LoginScreen from './src/screens/LoginScreen';
import PostsScreen from './src/screens/PostsScreen';
// import CreatePostsScreen from './src/screens/CreatePostsScreen';
import HomeIndicator from './src/copmonents/HomeIndicator';
import { useFonts } from 'expo-font';
import CommentsScreen from './src/screens/CommentsScreen';

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
    <>
      {/* <CommentsScreen /> */}
      {/* <CreatePostsScreen /> */}
      <PostsScreen />
      {/* <LoginScreen /> */}
      {/* <RegistrationScreen /> */}
      <StatusBar style='auto' />
      <HomeIndicator />
    </>
  );
}
