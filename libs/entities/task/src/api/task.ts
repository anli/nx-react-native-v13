export type Task = {
  id: string;
  name: string;
  deadline?: string;
  isCompleted?: boolean;
};

export const tasksStorageKey = 'tasksStorageKey';
