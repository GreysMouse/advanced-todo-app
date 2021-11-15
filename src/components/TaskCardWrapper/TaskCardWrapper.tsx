import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { POPUP_TYPES, POPUP_MESSAGES } from '../../config';

import {
  setSelectedTask,
  resetSelectedTask,
  setEditingTask,
  removeTask  
} from '../../utils/slices/tasksSlice';
import { enablePopup } from '../../utils/slices/popupSlice';

import TaskCard from '../TaskCard/TaskCard';
import PopupWrapper from '../PopupWrapper/PopupWrapper';

import { TDispatch } from '../../store';
import { IState } from '../../types/state';
import { ITaskCardWrapperProps } from '../../types/components/taskCardWrapper';
import { ITask } from '../../types/task';

const TaskCardWrapper= ({ taskId }: ITaskCardWrapperProps): JSX.Element => {

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

  const handleOpenPopup = (): void => {
    dispatch(enablePopup(POPUP_TYPES.REMOVE_TASK));
  }

  return (
    <>
      <TaskCard
        taskData={ taskData }
        isSelected={ isSelected }
        isEditing={ isEditing }
        onClick={ handleCardClick }
        onEdit={ handleCardEdit }
        onRemove={ handleOpenPopup }
      />
      <PopupWrapper
        type={ POPUP_TYPES.REMOVE_TASK }
        message={ POPUP_MESSAGES.REMOVE_TASK }
        onSubmit={ handleCardRemove }
      />
    </>
  );
}

export default TaskCardWrapper;
