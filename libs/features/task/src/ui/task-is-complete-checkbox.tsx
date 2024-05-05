import { Task } from '@entities/task';
import { Checkbox } from '@shared/ui';
import { ComponentProps } from 'react';
import { useUpdateTask } from '../api';

type IsCompletedCheckboxProps = Pick<Task, 'id' | 'isCompleted'> &
  Omit<ComponentProps<typeof Checkbox>, 'status'>;

export const TaskIsCompletedCheckbox = ({
  id,
  isCompleted,
  onPress,
  ...rest
}: IsCompletedCheckboxProps) => {
  const { mutateAsync: updateTask } = useUpdateTask();

  const handlePress: IsCompletedCheckboxProps['onPress'] = (status) => {
    updateTask(id, { isCompleted: status === 'checked' });
    onPress?.(status);
  };

  return (
    <Checkbox
      status={isCompleted ? 'checked' : 'unchecked'}
      onPress={handlePress}
      {...rest}
    />
  );
};
