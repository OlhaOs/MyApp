import react from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../../styles/global';
import GoBack from '../../assets/icons/GoBack';
import Header from '../copmonents/Header';

export default function CommentsScreen() {
  return (
    <View style={styles.container}>
      <Header icon={<GoBack />} text='Коментарі' iconPosition='left' />
      <View style={styles.publicationContainer}>
        <View style={styles.imageContainer}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    alignItems: 'center',
    gap: 32,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 58,
    height: 44,
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
    width: '100%',
    gap: 8,
  },
  imageContainer: {
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: colors.light_gray,
    borderColor: colors.border_gray,
    borderRadius: 8,
  },
});
