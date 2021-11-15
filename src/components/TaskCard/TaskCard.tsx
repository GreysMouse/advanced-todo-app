import React from 'react';

import { KEYS } from '../../config';

import TaskCardToolbar from '../TaskCardToolbar/TaskCardToolbar';
import TaskEditFormWrapper from '../TaskEditFormWrapper/TaskEditFormWrapper';

import { ITaskCardProps } from '../../types/components/taskCard';

import './styles/task-card.css';
import './styles/task-card__info-container.css';
import './styles/task-card__info.css';
import './styles/task-card__entry.css';
import './styles/task-card__entry_active.css';
import './styles/task-card__toolbar.css';

const TaskCard = ({
  taskData,
  isSelected,
  isEditing,
  onClick,
  onRemove,
  onEdit
}: ITaskCardProps): JSX.Element => {
  
  const handleCardClick = (evt: React.MouseEvent<HTMLParagraphElement>): void => {
    evt.stopPropagation();

    onClick();
  }

  const handleEscKeyUp = (evt: React.KeyboardEvent<HTMLLIElement>): void => {
    evt.stopPropagation();

    if (evt.key === KEYS.ESC) onClick();
  }

  return (
    <li className='task-card' onKeyUp={ handleEscKeyUp }>
      <div className='task-card__info-container'>
        <p className='task-card__info'>{ taskData.creationDate }</p>
        <p className='task-card__info'>{ taskData.creationTime }</p>
      </div>
      {
        isEditing ?
          <TaskEditFormWrapper taskData={ taskData } />
        :
          <p
            id='task-card__entry'
            className={ 'task-card__entry' + (isSelected ? ' task-card__entry_active' : '') }
            onClick={ handleCardClick }
            
          >
            { taskData.entry }
          </p>
      }
      {
        isSelected && !isEditing && <TaskCardToolbar
          extraClass='task-card__toolbar'
          onEditButtonClick={ onEdit }
          onDeleteButtonClick={ onRemove }
        />
      }
    </li>
  );
}

export default TaskCard;
