import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../styles/global';

export default function Header({ icon, text, iconPosition = 'left', onPress }) {
  return (
    <View style={styles.containerHeader}>
      {iconPosition === 'left' && (
        <TouchableOpacity style={styles.iconLeft} onPress={onPress}>
          {icon}
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{text}</Text>
      {iconPosition === 'right' && (
        <TouchableOpacity style={styles.iconRight} onPress={onPress}>
          {icon}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    marginTop: 44,
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,

    borderBottomWidth: 1,
    borderColor: colors.border_gray,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
    fontFamily: 'Roboto-Medium',
  },
  iconLeft: {
    position: 'absolute',
    left: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconRight: {
    position: 'absolute',
    right: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
