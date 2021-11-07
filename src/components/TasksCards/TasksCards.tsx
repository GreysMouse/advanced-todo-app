import TaskCardWrapper from '../TaskCardWrapper/TaskCardWrapper';

import { EMPTY_TASKS_LIST_MESSAGE } from '../../config';

import { ITasksCardsProps } from '../../types/components/tasksCards';

import './styles/tasks-cards.css';
import './styles/section__empty-list-message.css';

const TasksCards = ({ tasksIds }: ITasksCardsProps): JSX.Element => {
  return (
    tasksIds.length ?
      <ul className='tasks-cards'>
      {
        tasksIds.map((id) => <TaskCardWrapper key={ id } taskId={ id } />)
      }
      </ul>
    :
      <p className='section__empty-list-message'>{ EMPTY_TASKS_LIST_MESSAGE }</p>
  );
}

export default TasksCards;
