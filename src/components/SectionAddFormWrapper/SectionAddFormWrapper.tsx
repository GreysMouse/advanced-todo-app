import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import isStringUnique from '../../utils/isStringUnique';
import formatString from '../../utils/formatString';
import { addSection, closeInputField } from '../../utils/slices/sectionsSlice';
import { setActivePath } from '../../utils/slices/pathRouterSlice';

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

    if (evt.key === 'Escape') handleInputFieldClose();
  }

  const handleInputValueChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  }

  const handleSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault();

    if (!isNewSectionNameUnique) return;

    if (inputValue !== '') {
      const formattedInputValue = formatString(inputValue);

      dispatch(addSection({
        name: formattedInputValue,
        path: `section-${ formattedInputValue }`
      }));

      dispatch(setActivePath(`section-${ formattedInputValue }`));
    }

    handleInputFieldClose();
  }

  return (
    <>
      {
        isInputFieldOpen && <SectionAddForm
          inputValue={ inputValue || ''}
          isValid={ isNewSectionNameUnique }
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
