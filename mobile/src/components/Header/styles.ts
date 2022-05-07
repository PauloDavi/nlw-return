import { StatusBar, StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: theme.colors.surface_secondary,
    width: '100%',
    height: 107,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 132,
  },
  square: {
    backgroundColor: theme.colors.surface_secondary_hover,
    width: 32,
    height: 32,
    borderRadius: 8,
  },
  circle: {
    backgroundColor: theme.colors.surface_secondary_hover,
    width: 48,
    height: 48,
    borderRadius: 24,
  },
});
