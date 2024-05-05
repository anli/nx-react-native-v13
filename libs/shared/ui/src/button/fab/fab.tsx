import { StyleSheet } from 'react-native';
import { FABProps, FAB as NativeFAB } from 'react-native-paper';

export const FAB = ({ style, ...rest }: FABProps) => (
  <NativeFAB {...rest} style={[styles.fab, style]} />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
