import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootStack } from './navigation';

export const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
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
