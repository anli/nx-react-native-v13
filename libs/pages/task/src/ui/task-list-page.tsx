import { Text, TopAppBar } from '@shared/ui';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const TaskListPage = () => (
  <View className="bg-surface flex-1">
    <TopAppBar
      variant="center-aligned"
      title="Tasks"
      LeadingComponent={<TopAppBar.Action icon="menu" />}
      TrailingComponent={<TopAppBar.Action icon="account-circle" />}
    />
    <SafeAreaView className="flex-1" edges={['bottom']}>
      <Text>TaskListPage</Text>
    </SafeAreaView>
  </View>
);
