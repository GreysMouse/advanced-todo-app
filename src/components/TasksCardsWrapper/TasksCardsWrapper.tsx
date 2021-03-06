import { useSelector, shallowEqual } from 'react-redux';

import TasksCards from '../TasksCards/TasksCards';

import { IState } from '../../types/state';
import { ITasksCardsWrapperProps } from '../../types/components/tasksCardsWrapper';

const TasksCardsWrapper= ({ sectionName }: ITasksCardsWrapperProps): JSX.Element => {

  const sectionTasksIds = useSelector((state: IState) => {
    return state.tasks.allTasks.reduce((acc: string[], curr) => {
      if (curr.section === sectionName) acc.push(curr._id);
      return acc;
    }, [])
  }, shallowEqual);

  return <TasksCards tasksIds={ sectionTasksIds } />;
}

export default TasksCardsWrapper;
