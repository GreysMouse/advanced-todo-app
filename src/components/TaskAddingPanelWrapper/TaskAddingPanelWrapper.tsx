import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getFormattedString from '../../utils/getFormattedString';
import getFormattedDateString from '../../utils/getFormattedDateString';
import getFormattedTimeString from '../../utils/getFormattedTimeString';
import { addTask } from '../../utils/slices/tasksSlice';

import TaskAddingPanel from '../TaskAddingPanel/TaskAddingPanel';

import { TDispatch } from '../../store';
import { IState } from '../../types/state';

const TaskAddingPanelWrapper = (): JSX.Element => {
  
  const [ inputValue, setInputValue ] = React.useState<string>('');

  const activePath = useSelector((state: IState) => {
    return state.pathRouter.activePath;
  });

  const dispatch = useDispatch<TDispatch>();  

  const handleInputValueChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  }

  const handleSubmit = (): void => {
    if (inputValue !== '') {
      const formattedInputValue = getFormattedString(inputValue);
      const creationDate = getFormattedDateString();
      const creationTime = getFormattedTimeString();

      dispatch(addTask({
        section: activePath,
        entry: formattedInputValue,
        creationDate: creationDate,
        creationTime: creationTime
      }));

      setInputValue('');
    }
  }

  return <TaskAddingPanel           
    inputValue={ inputValue }
    onInputValueChange={ handleInputValueChange }
    onSubmit={ handleSubmit }
  />
}

export default TaskAddingPanelWrapper;
