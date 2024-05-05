import { Task, tasksStorageKey } from '@entities/task';
import { useLocalStorage } from '@shared/lib';

export const useDeleteTask = () => {
  const [, setTasks] = useLocalStorage.Object<Task[] | undefined>(
    tasksStorageKey
  );

  return {
    mutateAsync: (id: string) => {
      setTasks((_tasks) => _tasks?.filter((_task) => _task.id !== id));
    },
  };
};
