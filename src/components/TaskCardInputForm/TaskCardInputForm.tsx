import React from 'react';

import { KEYS } from '../../config';

import { ITaskCardInputFormProps } from '../../types/components/taskCardInputForm';

import './styles/task-card-input-form.css';
import './styles/task-card-input-form__input-field.css';

const TaskCardInputForm = ({
  inputValue,
  isValid = true,
  onInputValueChange,
  onClose,
  onSubmit
}: ITaskCardInputFormProps): JSX.Element => {
  
  const handleInputFieldClose = (): void => {
    if (onClose) onClose();
  }

  const handleEscKeyUp = (evt: React.KeyboardEvent<HTMLInputElement>): void => {
    evt.stopPropagation();

    if (evt.key === KEYS.ESC) handleInputFieldClose();
  }

  const handleSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault();
  
    if (isValid) {
      onSubmit();
      handleInputFieldClose();
    }
  }

  return (
    <form
      className='task-card-input-form'
      onSubmit={ handleSubmit }
    >
      <input
        className='task-card-input-form__input-field'
        autoFocus={ true }
        value={ inputValue }
        onChange={ onInputValueChange }
        onKeyUp={ handleEscKeyUp }
      />
    </form>
  );
}

export default TaskCardInputForm;
