import { useLocalStorage } from '@shared/lib';
import { Task, tasksStorageKey } from './task';

export const useTasks = () => {
  const [data] = useLocalStorage.Object<Task[] | undefined>(tasksStorageKey);

  return { data };
};
