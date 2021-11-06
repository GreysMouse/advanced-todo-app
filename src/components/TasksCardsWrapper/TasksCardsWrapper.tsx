import { useSelector, shallowEqual } from 'react-redux';

import TasksCards from '../TasksCards/TasksCards';

import { IState } from '../../types/state';
import { ITasksCardsWrapperProps } from '../../types/components/tasksCardsWrapper';

const TasksCardsWrapper= ({ path }: ITasksCardsWrapperProps): JSX.Element => {

  const sectiontasksIds = useSelector((state: IState) => {
    return state.tasks.allTasks.reduce((acc: string[], curr) => {
      if (curr.section === path) acc.push(curr._id);
      return acc;
    }, [])
  }, shallowEqual);

  return <TasksCards tasksIds={ sectiontasksIds } />;
}

export default TasksCardsWrapper;
