import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LogOut from '../../assets/icons/LogOut';
import { colors } from '../../styles/global';
import userFoto from '../../assets/images/avatar.jpg';

import Header from '../components/Header';
import Avatar from '../components/Avatar';

export default function PostsScreen({ route, navigation }) {
  const onLogin = () => {
    navigation.navigate('Login'); // Перехід на екран Login
  };

  return (
    <>
      <Header
        icon={<LogOut onPress={onLogin} />}
        text='Публікації'
        iconPosition='right'
      />
      <View style={styles.container}>
        <View style={styles.publicationContainer}>
          <Avatar width={60} height={60} userFoto={userFoto} />

          <View style={styles.UserDataContainer}>
            <Text style={styles.UserName}>Natali Romanova</Text>
            <Text style={styles.UserEmail}>email@example.com</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 44,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    alignItems: 'center',
    gap: 32,
    backgroundColor: colors.white,
  },

  publicationContainer: {
    width: '100%',
    flexDirection: 'row',
    flexGrow: 1,
    gap: 8,
    alignItems: 'flex-start',
  },

  UserName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
  },
  UserEmail: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    color: colors.black_primary,
    opacity: 0.8,
  },
});
