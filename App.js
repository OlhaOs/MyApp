import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import RegistrationScreen from './screens/RegistrationScreen';
import bgImage from './assets/images/Photo BG.png';
import HomeIndicator from './copmonents/HomeIndicator';

export default function App() {
  return (
    <ImageBackground source={bgImage} resizeMode='cover' style={styles.image}>
      <View style={styles.container}>
        <RegistrationScreen />
        <StatusBar style='auto' />
        <HomeIndicator/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
