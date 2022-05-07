import React from 'react';

import { List } from 'phosphor-react-native';
import { View } from 'react-native';

import { theme } from '../../theme';
import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <List
        size={32}
        color={theme.colors.surface_secondary_hover}
        weight="bold"
      />

      <View style={styles.list}>
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.circle} />
      </View>
    </View>
  );
}
