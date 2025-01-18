import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import InputField from '../copmonents/InputField';
import MainButton from '../copmonents/MainButton';
import { useFonts } from 'expo-font';
import AvatarPlace from '../copmonents/AvatarPlace';

export default function RegistrationScreen() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../assets/fonts/Roboto_Condensed-Regular.ttf'),
    'Roboto-Medium': require('../assets/fonts/Roboto_Condensed-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.containerForm}>
      <AvatarPlace />
      <Text style={styles.titleText}>Реєстрація</Text>
      <InputField placeholder='Логін' />
      <InputField placeholder='Адреса електронної пошти' />
      <InputField placeholder='Пароль' isTextShow={true} />
      <MainButton textButton={'Зареєструватися'} />
      <Text style={styles.smallText}>Вже є аккаунт? Увійти</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerForm: {
    position: 'relative',
    width: '100%',
    height: 549,
    justifyContent: 'flex- start',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  titleText: {
    marginTop: 92,
    marginBottom: 32,
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
  },
  smallText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#1B4371',
  },
});
