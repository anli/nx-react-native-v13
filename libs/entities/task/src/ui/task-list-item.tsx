import { List } from '@shared/ui';
import { formatRelative } from 'date-fns';
import { ComponentProps } from 'react';
import { Task } from '../api';

type TaskListItemProps = Pick<Task, 'name' | 'deadline'> & {
  TrailingComponent: ComponentProps<typeof List.Item>['right'];
};

const getDeadlineLabel = (deadline: TaskListItemProps['deadline']) =>
  deadline
    ? `Due ${formatRelative(new Date(deadline), new Date()).split('at')[0]}`
    : 'Someday';

export const TaskListItem = ({
  name,
  deadline,
  TrailingComponent,
}: TaskListItemProps) => (
  <List.Item
    title={name}
    description={getDeadlineLabel(deadline)}
    right={TrailingComponent}
  />
);
