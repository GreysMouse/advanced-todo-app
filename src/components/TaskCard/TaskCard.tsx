import React from 'react';

import TaskCardToolbar from '../TaskCardToolbar/TaskCardToolbar';

import { ITaskCardProps } from '../../types/components/taskCard';

import './styles/task-card.css';
import './styles/task-card__info-container.css';
import './styles/task-card__info.css';
import './styles/task-card__entry.css';
import './styles/task-card__entry_active.css';
import './styles/task-card__toolbar.css';

const TaskCard = ({ taskData, isSelected, onClick, onRemove }: ITaskCardProps): JSX.Element => {
  
  const handleCardClick = (evt: React.MouseEvent): void => {
    evt.stopPropagation();

    onClick();
  }

  return (
    <li className='task-card'>
      <div className='task-card__info-container'>
        <p className='task-card__info'>{ taskData.creationDate }</p>
        <p className='task-card__info'>{ taskData.creationTime }</p>
      </div>
      <p
        className={ 'task-card__entry' + (isSelected ? ' task-card__entry_active' : '') }
        onClick={ handleCardClick }
      >
        { taskData.entry }
      </p>
      {
        isSelected && <TaskCardToolbar
          extraClass='task-card__toolbar'
          onDeleteButtonClick={ onRemove }
        />
      }
    </li>
  );
}

export default TaskCard;
