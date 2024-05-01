import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Platform, Text, View } from 'react-native';

const Stack =
  Platform.OS === 'ios' ? createNativeStackNavigator() : createStackNavigator();

const screenOptions = {
  headerShown: false,
};

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

const TaskListPage = () => {
  return (
    <View>
      <Text>TaskListPage</Text>
    </View>
  );
};