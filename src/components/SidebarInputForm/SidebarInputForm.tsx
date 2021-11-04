import React from 'react';

import { ISidebarInputFormProps } from '../../types/components/sidebarInputForm';

import './styles/sidebar-input-form.css';
import './styles/sidebar-input-form__input-field.css';
import './styles/sidebar-input-form__input-field_invalid.css';

const SidebarInputForm = ({
  inputValue,
  isValid = true,
  onInputValueChange,
  onClose,
  onSubmit
}: ISidebarInputFormProps): JSX.Element => {
  
  const handleInputFieldClose = (): void => {
    if (onClose) onClose();
  }

  const handleEscKeyUp = (evt: React.KeyboardEvent): void => {
    evt.stopPropagation();

    if (evt.key === 'Escape') handleInputFieldClose();
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
      className='sidebar-input-form'
      onSubmit={ handleSubmit }
    >
      <input
        className={ `sidebar-input-form__input-field ${ isValid ? '' : 'sidebar-input-form__input-field_invalid' }` }
        autoFocus={ true }
        value={ inputValue }
        onChange={ onInputValueChange }
        onBlur={ handleInputFieldClose }
        onKeyUp={ handleEscKeyUp }
      />
    </form>
  );
}

export default SidebarInputForm;
