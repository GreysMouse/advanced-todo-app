import React from 'react';

import { KEYS } from '../../config';

import { IPopupProps } from '../../types/components/popup';

import './styles/popup.css';
import './styles/popup__container.css';
import './styles/popup__heading.css';
import './styles/popup__message.css';
import './styles/popup__buttons-container.css';
import './styles/popup__button.css';

const Popup = ({ message, onSubmit, onCancel }: IPopupProps): JSX.Element => {

  const submitButtonElement = React.useRef<HTMLButtonElement>(null);
  const cancelButtonElement = React.useRef<HTMLButtonElement>(null);

  const [ isSubmitButtonFocused, setIsSubmitButtonFocused ] = React.useState<boolean>(false);

  const toggleFocus = (): void => {
    if (!isSubmitButtonFocused) submitButtonElement?.current?.focus();
    else cancelButtonElement?.current?.focus();

    setIsSubmitButtonFocused(!isSubmitButtonFocused);
  }

  const handleKeyUp = (evt: React.KeyboardEvent<HTMLDivElement>): void => {
    evt.stopPropagation();

    switch(evt.key) {
      case KEYS.ESC: return onCancel();
      case KEYS.UP:
      case KEYS.DOWN:
      case KEYS.LEFT:
      case KEYS.RIGHT: return toggleFocus();
    }
  }

  return (
    <div
      className='popup'
      onKeyUp={ handleKeyUp }
    >
      <div className='popup__container'>
        <p className='popup__heading'>Warning</p>
        <p className='popup__message'>{ message }</p>
        <div className='popup__buttons-container'>
          <button
            ref={ submitButtonElement }
            className='popup__button'
            type='button'   
            onClick={ onSubmit }
          >
            Yes
          </button>
          <button
            ref={ cancelButtonElement }
            className='popup__button'
            type='button'
            autoFocus={ true }
            onClick={ onCancel }
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}

export default Popup;
