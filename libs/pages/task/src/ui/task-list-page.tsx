import { formatRelative } from 'date-fns';

import { Button, Checkbox, List, SafeAreaView, TopAppBar } from '@shared/ui';
import { SectionList, View } from 'react-native';
import { useTaskList } from '../model';

export const TaskListPage = () => {
  const { data } = useTaskList();

  const sections = data.tags.map((_tag) => ({
    ..._tag,
    data: _tag.tasks.sort(
      // TODO: refactor shared/ui/lib sortByDate
      (a, b) =>
        new Date(a.deadline ?? new Date()).getTime() -
        new Date(b.deadline ?? new Date()).getTime()
    ),
  }));

  return (
    <View className="bg-surface flex-1">
      <TopAppBar
        variant="center-aligned"
        title="Tasks"
        LeadingComponent={<TopAppBar.Action icon="account-circle" />}
        TrailingComponent={<TopAppBar.Action icon="filter-variant" />}
      />
      <SafeAreaView>
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          renderSectionHeader={({ section: { name } }) => (
            <View className="bg-surface">
              <List.Subheader>{name}</List.Subheader>
            </View>
          )}
          renderItem={({ item: { name, deadline, isCompleted } }) => (
            // TODO: entities/task
            <List.Item
              title={name}
              description={
                deadline
                  ? `Due ${
                      formatRelative(new Date(deadline), new Date()).split(
                        'at'
                      )[0]
                    }`
                  : 'Someday'
              }
              right={(props) => (
                // TODO: refactor to features/task
                <Checkbox
                  status={isCompleted ? 'checked' : 'unchecked'}
                  {...props}
                />
              )}
            />
          )}
        />
        <Button.FAB icon="plus" />
      </SafeAreaView>
    </View>
  );
};
