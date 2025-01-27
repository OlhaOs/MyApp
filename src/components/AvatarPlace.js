import React from 'react';
import { StyleSheet, View } from 'react-native';
import SmallButton from './SmallButton';

import { colors } from '../../styles/global';

export default function AvatarPlace({icon, outer}) {
  return (
    <View style={styles.containerAvatar}>
      <SmallButton icon={icon} outer={outer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  containerAvatar: {
    width: 120,
    height: 120,
    backgroundColor: colors.light_gray,
    borderRadius: 16,

    position: 'absolute',
    top: -60,
    left: '50%',
    transform: [{ translateX: -60 + 16 }],
  },
});
