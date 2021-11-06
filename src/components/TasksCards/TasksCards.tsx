import TaskCardWrapper from '../TaskCardWrapper/TaskCardWrapper';

import { ITasksCardsProps } from '../../types/components/tasksCards';

import './styles/tasks-cards.css';
import './styles/tasks-cards__cards-list.css';

const TasksCards = ({ tasksIds }: ITasksCardsProps): JSX.Element => {
  return (
    <div className='tasks-cards'>
      <ul className='tasks-cards__cards-list'>
      {
        tasksIds.map((id) => <TaskCardWrapper key={ id } taskId={ id } />)
      }
      </ul>
    </div>
  );
}

export default TasksCards;
