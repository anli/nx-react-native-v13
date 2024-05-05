import { TaskListItem, useTaskList } from '@entities/task';
import { TaskIsCompletedCheckbox } from '@features/task';
import { sortByDate } from '@shared/lib';
import { Button, Divider, List, SafeAreaView, TopAppBar } from '@shared/ui';
import { SectionList, View } from 'react-native';

export const TaskListPage = () => {
  const { data = { tags: [] } } = useTaskList({
    tasksSortCompareFn: sortByDate('deadline'),
  });
  const sections = data?.tags?.map((_tag) => ({
    ..._tag,
    data: _tag.tasks,
  }));

  return (
    <View className="bg-surface flex-1">
      <TopAppBar
        variant="center-aligned"
        title="Tasks"
        LeadingComponent={<TopAppBar.Action icon="cog" />}
        TrailingComponent={<TopAppBar.Action icon="filter-variant" />}
      />
      <SafeAreaView>
        <SectionList
          sections={sections ?? []}
          keyExtractor={(item) => item.id}
          renderSectionHeader={({ section: { name } }) => (
            <View className="bg-surface">
              <Divider />
              <List.Subheader>{name}</List.Subheader>
            </View>
          )}
          renderItem={({ item }) => (
            <TaskListItem
              {...item}
              TrailingComponent={(props) => (
                <TaskIsCompletedCheckbox {...item} {...props} />
              )}
            />
          )}
        />
        <Button.FAB icon="plus" />
      </SafeAreaView>
    </View>
  );
};
