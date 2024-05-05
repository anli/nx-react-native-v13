import { useTasks } from './use-tasks';

export const useTask = (id: string) => {
  const { data: tasks } = useTasks();

  return { data: tasks?.find((_task) => _task.id === id) };
};
