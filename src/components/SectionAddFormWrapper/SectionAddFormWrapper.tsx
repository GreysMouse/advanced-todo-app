import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import isStringUnique from '../../utils/isStringUnique';
import getFormattedString from '../../utils/getFormattedString';
import { addSection, closeInputField } from '../../utils/slices/sectionsSlice';
import { setActivePath } from '../../utils/slices/pathRouterSlice';

import SidebarInputForm from '../SidebarInputForm/SidebarInputForm';

import { IState } from '../../types/state';
import { TDispatch } from '../../store';

const SectionAddFormWrapper = (): JSX.Element => {

  const [ inputValue, setInputValue ] = React.useState<string>('');

  const isSectionAddFormOpen = useSelector((state: IState) => {
    return state.sections.isSectionAddFormOpen;
  });

  const allSectionsNames = useSelector((state: IState) => {
    return state.sections.allSections.map((section) => section.name);
  }, shallowEqual);

  const isNewSectionNameUnique = isStringUnique(getFormattedString(inputValue, 'lowercase'), allSectionsNames);

  const dispatch = useDispatch<TDispatch>();  

  const handleInputFieldClose = (): void => {
    setInputValue('');
    dispatch(closeInputField());
  }

  const handleInputValueChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  }

  const handleSubmit = (): void => {
    if (inputValue !== '') {
      const formattedInputValue = getFormattedString(inputValue, 'lowercase');

      dispatch(addSection({
        name: formattedInputValue,
        path: `section-${ formattedInputValue }`
      }));

      dispatch(setActivePath(`section-${ formattedInputValue }`));
    }
  }

  return (
    <>
      {
        isSectionAddFormOpen && <SidebarInputForm
          inputValue={ inputValue }
          isValid={ isNewSectionNameUnique }
          onInputValueChange={ handleInputValueChange }
          onClose={ handleInputFieldClose }
          onSubmit={ handleSubmit }
        />
      }
    </>
  );
}

export default SectionAddFormWrapper;
