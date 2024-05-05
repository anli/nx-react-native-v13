import { Task, useTags, useTasks, useTasksTags } from '../api';

type UseTaskListProps = {
  tasksSortCompareFn?: ((a: Task, b: Task) => number)
}

export const useTaskList = ({
  tasksSortCompareFn
}: UseTaskListProps) => {
  const { data: tasks } = useTasks();
  const { data: tags } = useTags();
  const { data: tasksTags } = useTasksTags();
  const data = {
    tags: tags?.map(_tag => {
      const filteredTasksTags = tasksTags?.filter(_taskTag => _taskTag.tagId === _tag.id)
      const filteredTasks = (tasks ?? [])?.filter(_task => !!filteredTasksTags?.find(_taskTag => _taskTag.taskId === _task.id))

      return {
        id: _tag.id,
        name: _tag.name,
        tasks: (tasksSortCompareFn ? filteredTasks?.sort(tasksSortCompareFn) : filteredTasks)
      }
    })
  }

  return { data };
};
