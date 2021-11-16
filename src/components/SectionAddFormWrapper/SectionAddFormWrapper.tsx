import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { SECTION_NAME_PREFIX } from '../../config';

import isStringUnique from '../../utils/isStringUnique';
import getFormattedString from '../../utils/getFormattedString';
import { setActiveSection, addSection, closeInputField } from '../../utils/slices/sectionsSlice';

import SidebarInputForm from '../SidebarInputForm/SidebarInputForm';

import { IState } from '../../types/state';
import { TDispatch } from '../../store';

const SectionAddFormWrapper = (): JSX.Element => {

  const [ inputValue, setInputValue ] = React.useState<string>('');
  
  const formattedInputValue = SECTION_NAME_PREFIX + getFormattedString(inputValue, 'lowercase');

  const isSectionAddFormOpen = useSelector((state: IState) => {
    return state.sections.isAddFormOpen;
  });

  const sectionsNames = useSelector((state: IState) => {
    return state.sections.allSections.map(section => section.name);
  }, shallowEqual);

  const isNewSectionNameUnique = isStringUnique(formattedInputValue, sectionsNames);

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
      const sectionName = formattedInputValue;

      dispatch(addSection({
        name: sectionName
      }));

      dispatch(setActiveSection(sectionName));
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
