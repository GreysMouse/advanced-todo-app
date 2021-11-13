import { ITaskCardToolbarProps } from '../../types/components/taskCardToolbar';

import './styles/task-card-toolbar.css';
import './styles/task-card-toolbar__tool-button.css';
import './styles/task-card-toolbar__tool-button_type_edit.css';
import './styles/task-card-toolbar__tool-button_type_delete.css';
import React from 'react';

const TaskCardToolbar = ({
  extraClass = '',
  onRenameButtonClick,
  onDeleteButtonClick
}: ITaskCardToolbarProps): JSX.Element => {
  
  const handleEditButtonClick = (evt: React.MouseEvent): void => {
    evt.stopPropagation();

    onRenameButtonClick();
  }

  const handleDeleteButtonClick = (evt: React.MouseEvent): void => {
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
