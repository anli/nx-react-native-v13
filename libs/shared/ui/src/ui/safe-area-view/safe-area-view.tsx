import { StyleSheet } from 'react-native';
import {
  SafeAreaView as NativeSafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

export const SafeAreaView = ({ style, ...rest }: SafeAreaViewProps) => (
  <NativeSafeAreaView
    edges={['bottom']}
    mode="margin"
    style={[style, styles.container]}
    {...rest}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
