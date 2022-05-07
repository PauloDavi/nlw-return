import React from 'react';

import { Text, View } from 'react-native';

import { styles } from './styles';

export function Content() {
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>
          Experimente enviar um feedback de um bug na aplicação 🐛
        </Text>
      </View>
    </View>
  );
}
