import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import isStringUnique from '../../utils/isStringUnique';
import formatString from '../../utils/formatString';
import { addNewSection, closeInputField } from '../../utils/slices/sectionsSlice';

import SectionAddForm from '../SectionAddForm/SectionAddForm';

import { IState } from '../../types/state';
import { TDispatch } from '../../store';
import { ISection } from '../../types/section';

const SectionAddFormWrapper = (): JSX.Element => {

  const [ inputValue, setInputValue ] = React.useState<string>('');

  const isInputFieldOpen = useSelector<IState, boolean>((state: IState) => {
    return state.sections.isInputFieldOpen;
  });

  const allSections = useSelector<IState, ISection[]>((state: IState) => {
    return state.sections.allSections;
  });

  const allSectionsNames = allSections.map((section) => section.name);

  const isNewSectionNameUnique = isStringUnique(formatString(inputValue), allSectionsNames);

  const dispatch = useDispatch<TDispatch>();  

  const clearInputValue = () => {
    setInputValue('');
  }

  const handleInputFieldClose = (): void => {
    clearInputValue();
    dispatch(closeInputField());
  }

  const handleEscKeyUp = (evt: React.KeyboardEvent): void => {
    evt.stopPropagation();

    if (evt.key === 'Escape') dispatch(closeInputField());
  }

  const handleInputValueChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  }

  const handleSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault();

    handleInputFieldClose();

    if (!isNewSectionNameUnique) {
      console.log('Such section name is already exists!');
      return;
    }

    if (inputValue !== '') {
      const formattedInputValue = formatString(inputValue);

      dispatch(addNewSection({
        _id: '10',
        name: formattedInputValue,
        path: `section-${ formattedInputValue }`
      }));
    }
  }

  return (
    <>
      {
        isInputFieldOpen && <SectionAddForm
          inputValue={ inputValue || ''}
          onInputValueChange={ handleInputValueChange }
          onFocusLoss={ handleInputFieldClose }
          onEscKeyUp={ handleEscKeyUp }
          onSubmit={ handleSubmit }
        />
      }      
    </>
  );
}

export default SectionAddFormWrapper;
