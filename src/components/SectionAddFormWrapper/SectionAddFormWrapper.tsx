import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { closeInputField } from '../../utils/sectionsSlice';

import SectionAddForm from '../SectionAddForm/SectionAddForm';

import { IState } from '../../types/state';
import { TDispatch } from '../../store';

const SectionAddFormWrapper = (): JSX.Element => {
  const isInputFieldOpen = useSelector<IState, boolean>((state: IState) => state.sections.isInputFieldOpen);

  const dispatch = useDispatch<TDispatch>();

  const handleFocusLoss = (): void => {
    dispatch(closeInputField());
  }

  const handleEscKeyUp = (evt: React.KeyboardEvent): void => {
    evt.stopPropagation();

    if (evt.key === 'Escape') dispatch(closeInputField());
  }

  const handleSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault();

    dispatch(closeInputField());
    console.log('sub')
  }

  return (
    <>
      {
        isInputFieldOpen && <SectionAddForm
          onFocusLoss={ handleFocusLoss }
          onEscKeyUp={ handleEscKeyUp }
          onSubmit={ handleSubmit }
        />
      }      
    </>
  );
}

export default SectionAddFormWrapper;
