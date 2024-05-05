import { localStorage } from "@shared/lib";
import { Tag, tagsStorageKey } from "./tag";
import { Task, tasksStorageKey } from "./task";
import { TaskTag, tasksTagsStorageKey } from "./task-tag";

const mockTasks: Task[] = [
  {
    id: 'task1',
    name: 'Lorem ipsum',
    deadline: '2024-05-05T00:00:00.000000+08:00',
  },
  {
    id: 'task2',
    name: 'Lorem ipsum',
  },
  {
    id: 'task3',
    name: 'Lorem ipsum',
    deadline: '2024-05-03T00:00:00.000000+08:00',
  },
  {
    id: 'task4',
    name: 'Completed task',
    isCompleted: true,
  },
  {
    id: 'task5',
    name: 'Lorem ipsum',
    deadline: '2024-05-03T00:00:00.000000+08:00',
  },
]

const mockTags: Tag[] = [
  {
    id: 'tag1',
    name: 'Work',
  },
  {
    id: 'tag2',
    name: 'Home',
  },
]

const mockTasksTags: TaskTag[] = [
  {
    taskId: 'task1',
    tagId: 'tag1',
  },
  {
    taskId: 'task1',
    tagId: 'tag1',
  },
  {
    taskId: 'task2',
    tagId: 'tag1',
  },
  {
    taskId: 'task4',
    tagId: 'tag1',
  },
  {
    taskId: 'task5',
    tagId: 'tag2',
  },
]


export const setupTaskFixtures = () => {
  localStorage.set(tasksStorageKey, JSON.stringify(mockTasks))
  localStorage.set(tagsStorageKey, JSON.stringify(mockTags))
  localStorage.set(tasksTagsStorageKey, JSON.stringify(mockTasksTags))
}
