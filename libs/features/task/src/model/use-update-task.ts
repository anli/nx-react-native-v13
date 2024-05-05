import { Task } from '@entities/task';

export const useUpdateTask = () => {
  const mutate = (id: string, task: Partial<Task>) => {
    // TODO: send api change
    console.log({ id, task });
  };
  return {
    mutate,
  };
};
