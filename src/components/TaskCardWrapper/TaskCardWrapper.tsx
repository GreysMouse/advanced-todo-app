import { useSelector } from 'react-redux';

import TasksCard from '../TaskCard/TaskCard';

import { IState } from '../../types/state';
import { ITaskCardWrapperProps } from '../../types/components/taskCardWrapper';
import { ITask } from '../../types/task';

const TaskCardWrapper= ({ taskId }: ITaskCardWrapperProps): JSX.Element => {

  const taskData = useSelector((state: IState) => {
    return state.tasks.allTasks.find(task => task._id === taskId);
  }) as ITask;

  return <TasksCard taskData={ taskData } />;
}

export default TaskCardWrapper;
