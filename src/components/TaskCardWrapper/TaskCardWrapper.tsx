import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { POPUP_MESSAGES } from '../../config';

import {
  setSelectedTask,
  resetSelectedTask,
  setEditingTask,
  removeTask
} from '../../utils/slices/tasksSlice';

import TaskCard from '../TaskCard/TaskCard';
import PopupWrapper from '../PopupWrapper/PopupWrapper';

import { TDispatch } from '../../store';
import { IState } from '../../types/state';
import { ITaskCardWrapperProps } from '../../types/components/taskCardWrapper';
import { ITask } from '../../types/task';

const TaskCardWrapper= ({ taskId }: ITaskCardWrapperProps): JSX.Element => {

  const [ isDeleting, setIsDeleting ] = React.useState<boolean>(false);

  const taskData = useSelector((state: IState) => {
    return state.tasks.allTasks.find(task => task._id === taskId);
  }) as ITask;

  const isSelected = useSelector((state: IState) => {
    return state.tasks.selectedTask === taskId;
  });

  const isEditing = useSelector((state: IState) => {
    return state.tasks.editingTask === taskId;
  });

  const dispatch = useDispatch<TDispatch>();

  const handleCardClick = (): void => {
    isSelected ? dispatch(resetSelectedTask()) : dispatch(setSelectedTask(taskId));
  }

  const handleCardEdit = (): void => {
    dispatch(setEditingTask(taskId));
  }

  const handleCardRemove = (): void => {
    dispatch(removeTask(taskId));
  }

  const handlePopupOpen = (): void => {
    setIsDeleting(true);
  }

  const handlePopupCancel = (): void => {
    setIsDeleting(false);
  }

  return (
    <li>
      <TaskCard
        taskData={ taskData }
        isSelected={ isSelected }
        isEditing={ isEditing }
        onClick={ handleCardClick }
        onEdit={ handleCardEdit }
        onRemove={ handlePopupOpen }
      />
      {
        isDeleting && <PopupWrapper
          message={ POPUP_MESSAGES.REMOVE_TASK }
          onSubmit={ handleCardRemove }
          onCancel={ handlePopupCancel }
        />
      }
    </li>
  );
}

export default TaskCardWrapper;
