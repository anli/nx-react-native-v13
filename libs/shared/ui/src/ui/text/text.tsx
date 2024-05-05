import {
  Text as NativeText,
  TextProps as NativeTextProps,
} from 'react-native-paper';

export const Text = ({ ...rest }: NativeTextProps<string>) => (
  <NativeText {...rest} />
);
