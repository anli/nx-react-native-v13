import { FC, PropsWithChildren } from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import { GestureHandlerRootView as NativeGestureHandlerRootView } from 'react-native-gesture-handler';

export const GestureHandlerRootView: FC<PropsWithChildren<ViewProps>> = ({
  style,
  ...rest
}) => (
  <NativeGestureHandlerRootView style={[styles.container, style]} {...rest} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
