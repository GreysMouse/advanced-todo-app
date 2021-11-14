import React from 'react';

import TaskCardToolbar from '../TaskCardToolbar/TaskCardToolbar';
import TaskRenameFormWrapper from '../TaskRenameFormWrapper/TaskRenameFormWrapper';

import { ITaskCardProps } from '../../types/components/taskCard';

import './styles/task-card.css';
import './styles/task-card__info-container.css';
import './styles/task-card__info.css';
import './styles/task-card__entry.css';
import './styles/task-card__entry_active.css';
import './styles/task-card__toolbar.css';
import { KEYS } from '../../config';

const TaskCard = ({
  taskData,
  isSelected,
  isInRenamingState,
  onClick,
  onRemove,
  onRename
}: ITaskCardProps): JSX.Element => {
  
  const handleCardClick = (evt: React.MouseEvent<HTMLParagraphElement>): void => {
    evt.stopPropagation();

    onClick();
  }

  const handleEscKeyUp = (evt: React.KeyboardEvent): void => {
    evt.stopPropagation();
    console.log('wdwd')
    if (evt.key === KEYS.ESC) onClick();
  }

  return (
    <li className='task-card' onKeyUp={ handleEscKeyUp }>
      <div className='task-card__info-container'>
        <p className='task-card__info'>{ taskData.creationDate }</p>
        <p className='task-card__info'>{ taskData.creationTime }</p>
      </div>
      {
        isInRenamingState ?
          <TaskRenameFormWrapper taskData={ taskData } />
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
        isSelected && !isInRenamingState && <TaskCardToolbar
          extraClass='task-card__toolbar'
          onRenameButtonClick={ onRename }
          onDeleteButtonClick={ onRemove }
        />
      }
    </li>
  );
}

export default TaskCard;
