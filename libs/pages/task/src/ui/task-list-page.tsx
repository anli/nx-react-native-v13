import { TopAppBar } from '@shared/ui';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const TaskListPage = () => {
  return (
    <View className="bg-surface flex-1">
      <SafeAreaView className="flex-1">
        <TopAppBar type="center-aligned" title="Tasks" />
        <Text className="text-on-surface">TaskListPage</Text>
      </SafeAreaView>
    </View>
  );
};
