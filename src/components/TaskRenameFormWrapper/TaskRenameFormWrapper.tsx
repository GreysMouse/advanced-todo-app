import React from 'react';
import { useDispatch } from 'react-redux';

import getFormattedString from '../../utils/getFormattedString';
import { resetRenamingTask, renameTask } from '../../utils/slices/tasksSlice';

import TaskCardInputForm from '../TaskCardInputForm/TaskCardInputForm';

import { TDispatch } from '../../store';
import { ITaskRenameFormWrapperProps } from '../../types/components/taskRenameFormWrapper';

const TaskRenameFormWrapper = ({ taskData }: ITaskRenameFormWrapperProps): JSX.Element => {

  const [ inputValue, setInputValue ] = React.useState<string>(taskData.entry);

  const dispatch = useDispatch<TDispatch>();

  const handleInputFieldClose = (): void => {
    dispatch(resetRenamingTask());
  }

  const handleInputValueChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  }

  const handleSubmit = (): void => {
    if (inputValue !== '') {
      const formattedInputValue = getFormattedString(inputValue, 'capitalize');

      dispatch(renameTask({
        ...taskData,
        entry: formattedInputValue,
      }));
    }
  }

  return <TaskCardInputForm
    inputValue={ inputValue }
    onInputValueChange={ handleInputValueChange }
    onClose={ handleInputFieldClose }
    onSubmit={ handleSubmit }
  />
}

export default TaskRenameFormWrapper;
