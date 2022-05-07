import { StatusBar, StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    width: '100%',
    padding: 24,
  },
  titleBox: {
    backgroundColor: theme.colors.surface_secondary,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 124,
    borderRadius: 8,
    paddingHorizontal: 24,
  },
  title: {
    color: theme.colors.text_secondary,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: theme.fonts.regular,
  },
});
