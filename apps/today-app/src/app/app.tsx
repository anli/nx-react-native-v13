import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView, StatusBar, ThemeProvider } from '@shared/ui';
import { RootStack } from './navigation';

export const App = () => (
  <GestureHandlerRootView>
    <ThemeProvider>
      <NavigationContainer>
        <StatusBar />
        <RootStack />
      </NavigationContainer>
    </ThemeProvider>
  </GestureHandlerRootView>
);
