import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import GoBack from '../../assets/icons/GoBack';
import { colors } from '../../styles/global';


export default function CreatePostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <GoBack />
        <Text style={styles.title}>Створити публікацію</Text>
      </View>
      <View style={styles.publicationContainer}></View>
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
    justifyContent: 'flex-start',
    gap: 58,

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
