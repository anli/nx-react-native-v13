import { Task, tasksStorageKey } from '@entities/task';
import { useLocalStorage } from '@shared/lib';
import { v4 as uuid } from 'uuid';

export const useCreateTask = () => {
  const [, setTasks] = useLocalStorage.Object<Task[] | undefined>(
    tasksStorageKey
  );

  return {
    mutateAsync: (task: Omit<Task, 'id' | 'isCompleted'>) => {
      setTasks((_tasks) => [
        ...(_tasks ?? []),
        { ...task, id: uuid(), isCompleted: false },
      ]);
    },
  };
};
