import { ITaskCardProps } from '../../types/components/taskCard';

import './styles/task-card.css';
import './styles/task-card__info-container.css';
import './styles/task-card__info.css';
import './styles/task-card__entry-container.css';
import './styles/task-card__entry.css';

const TaskCard = ({ taskData }: ITaskCardProps): JSX.Element => {
  return (
    <li className='task-card'>
      <div className='task-card__info-container'>
        <p className='task-card__info'>{ taskData.creationDate }</p>
        <p className='task-card__info'>{ taskData.creationTime }</p>
      </div>
      <div className='task-card__entry-container'>
        <p className='task-card__entry'>{ taskData.entry }</p>
      </div>      
    </li>
  );
}

export default TaskCard;
