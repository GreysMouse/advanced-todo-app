import TaskCardWrapper from '../TaskCardWrapper/TaskCardWrapper';
import TaskAddButton from '../TaskAddButton/TaskAddButton';

import { EMPTY_TASKS_LIST_MESSAGE } from '../../config';

import { ITasksCardsProps } from '../../types/components/tasksCards';

import './styles/tasks-cards.css';
import './styles/tasks-cards__cards-list.css';
import './styles/section__empty-list-message.css';

const TasksCards = ({ tasksIds }: ITasksCardsProps): JSX.Element => {
  return (
    tasksIds.length ?
      <div className='tasks-cards'>
        <ul className='tasks-cards__cards-list'>
        {
          tasksIds.map((id) => <TaskCardWrapper key={ id } taskId={ id } />)
        }
        </ul>
      </div>
    :
      <p className='section__empty-list-message'>{ EMPTY_TASKS_LIST_MESSAGE }</p>
  );
}

export default TasksCards;
