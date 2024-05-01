import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { cssInterop } from 'nativewind';
import React from 'react';
import { Platform, StatusBar, Text, View } from 'react-native';

const Stack =
  Platform.OS === 'ios' ? createNativeStackNavigator() : createStackNavigator();

const screenOptions = {
  headerShown: false,
};

cssInterop(StatusBar, {
  backgroundColorClassName: {
    target: false,
    nativeStyleToProp: {
      color: 'backgroundColor',
    },
  },
});

export const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TaskListPage"
        component={TaskListPage}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

// TODO: refactor to @pages/task
const TaskListPage = () => {
  return (
    <View className="bg-surface flex-1 items-center justify-center">
      <Text className="text-on-surface">TaskListPage</Text>
    </View>
  );
};
