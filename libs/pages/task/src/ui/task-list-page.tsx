import { TopAppBar } from '@shared/ui';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export const TaskListPage = () => {
  return (
    <View className="bg-surface flex-1">
      <SafeAreaView className="flex-1">
        <TopAppBar type="center-aligned" title="Tasks" />
        <Appbar.Header mode="center-aligned">
          <Appbar.Content title="Paper" />
          <Appbar.Action icon="account-circle" />
        </Appbar.Header>
      </SafeAreaView>
    </View>
  );
};
