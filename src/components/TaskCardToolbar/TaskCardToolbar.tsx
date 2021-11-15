import React from 'react';

import { ITaskCardToolbarProps } from '../../types/components/taskCardToolbar';

import './styles/task-card-toolbar.css';
import './styles/task-card-toolbar__tool-button.css';
import './styles/task-card-toolbar__tool-button_type_edit.css';
import './styles/task-card-toolbar__tool-button_type_delete.css';

const TaskCardToolbar = ({
  extraClass = '',
  onEditButtonClick,
  onDeleteButtonClick
}: ITaskCardToolbarProps): JSX.Element => {
  
  const handleEditButtonClick = (evt: React.MouseEvent<HTMLButtonElement>): void => {
    evt.stopPropagation();

    onEditButtonClick();
  }

  const handleDeleteButtonClick = (evt: React.MouseEvent<HTMLButtonElement>): void => {
    evt.stopPropagation();

    onDeleteButtonClick();
  }

  return (
    <div className={ `task-card-toolbar ${ extraClass }` }>
      <button
        className='task-card-toolbar__tool-button task-card-toolbar__tool-button_type_edit'
        onClick={ handleEditButtonClick }
      />
      <button
        className='task-card-toolbar__tool-button task-card-toolbar__tool-button_type_delete'
        onClick={ handleDeleteButtonClick }
      />
    </div>
  );
}

export default TaskCardToolbar;
