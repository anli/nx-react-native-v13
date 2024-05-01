import { NavigationContainer } from '@react-navigation/native';
import {
  StatusBar as NativeStatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootStack } from './navigation';

export const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <StatusBar />
        <RootStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// TODO: refactor to @shared/ui
const StatusBar = () => {
  const colorScheme = useColorScheme();

  return (
    <NativeStatusBar
      backgroundColor="transparent"
      barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      translucent
    />
  );
};
