import { useLocalStorage } from '@shared/lib';
import { TaskTag, tasksTagsStorageKey } from './task-tag';



export const useTasksTags = () => {
  const [data] = useLocalStorage.Object<TaskTag[] | undefined>(tasksTagsStorageKey);

  return { data };
};
