import { setupTaskFixtures } from '@entities/task';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView, StatusBar, ThemeProvider } from '@shared/ui';
import { DevSettings } from 'react-native';
import { RootStack } from './navigation';

DevSettings.addMenuItem('Setup Task Fixtures', () => {
  setupTaskFixtures();
});

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
