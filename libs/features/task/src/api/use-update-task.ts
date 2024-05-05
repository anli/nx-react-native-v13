import { Task, tasksStorageKey } from '@entities/task';
import { useLocalStorage } from '@shared/lib';

export const useUpdateTask = () => {
  const [, setTasks] = useLocalStorage.Object<Task[] | undefined>(
    tasksStorageKey
  );

  return {
    mutateAsync: (id: string, updatedTask: Partial<Omit<Task, 'id'>>) => {
      setTasks((_tasks: Task[] = []) => {
        const index = _tasks.findIndex((_task) => _task.id === id);

        if (index >= 0) {
          const prevTask = _tasks[index];
          return Object.assign([], _tasks, {
            [index]: { ...prevTask, ...updatedTask },
          });
        }

        return _tasks;
      });
    },
  };
};
