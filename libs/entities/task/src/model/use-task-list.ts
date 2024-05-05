// TODO: add shared/api and connect to persistent data source
export const useTaskList = () => ({
  data: {
    tags: [
      {
        id: 'work',
        name: 'Work',
        tasks: [
          {
            id: 'task1',
            name: 'Lorem ipsum',
            tags: [{ id: 'work' }],
            deadline: '2024-05-05T00:00:00.000000+08:00',
          },
          {
            id: 'task2',
            name: 'Lorem ipsum',
            tags: [{ id: 'work' }],
          },
          {
            id: 'task3',
            name: 'Lorem ipsum',
            tags: [{ id: 'work' }],
            deadline: '2024-05-03T00:00:00.000000+08:00',
          },
          {
            id: 'task4',
            name: 'Completed task',
            tags: [{ id: 'work' }],
            isCompleted: true,
          },
        ],
      },
      {
        id: 'home',
        name: 'Home',
        tasks: [
          {
            id: 'task5',
            name: 'Lorem ipsum',
            tags: [{ id: 'home' }],
            deadline: '2024-02-02T00:00:00.000000+08:00',
          },
        ],
      },
    ],
  },
});
