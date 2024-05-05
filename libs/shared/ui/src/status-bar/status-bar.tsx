import { FC } from 'react';
import {
  StatusBar as NativeStatusBar,
  StatusBarProps,
  useColorScheme,
} from 'react-native';

export const StatusBar: FC<StatusBarProps> = (props) => {
  const colorScheme = useColorScheme();

  return (
    <NativeStatusBar
      backgroundColor="transparent"
      barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      translucent
      {...props}
    />
  );
};
