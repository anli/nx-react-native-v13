import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from '@shared/ui';
import { Platform, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { RootStack } from './navigation';

// TODO: refactor to theme provider
export const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <PaperProvider>
        {Platform.OS === 'web' ? (
          <style type="text/css">{`
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
        }
      `}</style>
        ) : null}
        <NavigationContainer>
          <StatusBar />
          <RootStack />
        </NavigationContainer>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

// TODO: refactor to shared/utils
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
