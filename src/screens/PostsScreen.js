import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import LogOut from '../../assets/icons/LogOut';
import { colors } from '../../styles/global';
import userFoto from '../../assets/images/avatar.jpg';

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Публікації</Text>
        <LogOut />
      </View>
      <View style={styles.publicationContainer}>
        <View style={styles.avatar}>
          <Image source={userFoto} />
        </View>
        <View style={styles.UserDataContainer}>
          <Text style={styles.UserName}>Natali Romanova</Text>
          <Text style={styles.UserEmail}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    marginTop: 44,
    marginLeft: 16,
    marginRight: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 109,

    borderBottomColor: colors.border_gray,
    borderBottomWidth: 0.5,
  },
  title: {
    marginTop: 11,
    marginBottom: 11,
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
  },
  publicationContainer: {
    flexDirection: 'row',
    marginTop: 32,
    gap: 8,
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,

    borderRadius: 16,
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
