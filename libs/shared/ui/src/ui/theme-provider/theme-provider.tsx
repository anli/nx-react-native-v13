import { Platform } from 'react-native';
import { PaperProvider, ProviderProps } from 'react-native-paper';

export const ThemeProvider = ({ children, ...rest }: ProviderProps) => (
  <PaperProvider {...rest}>
    {Platform.OS === 'web' ? (
      <style type="text/css">{`
  @font-face {
    font-family: 'MaterialCommunityIcons';
    src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
  }
`}</style>
    ) : null}
    {children}
  </PaperProvider>
);
