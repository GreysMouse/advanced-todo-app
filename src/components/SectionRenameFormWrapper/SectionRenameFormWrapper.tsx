import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import isStringUnique from '../../utils/isStringUnique';
import getFormattedString from '../../utils/getFormattedString';

import { resetRenamingSection, renameSection } from '../../utils/slices/sectionsSlice';
import { setActivePath } from '../../utils/slices/pathRouterSlice';

import SidebarInputForm from '../SidebarInputForm/SidebarInputForm';

import { TDispatch } from '../../store';
import { IState } from '../../types/state';
import { ISectionRenameFormWrapperProps } from '../../types/components/sectionRenameFormWrapper';

const SectionRenameFormWrapper = ({ sectionData, isSectionActive }: ISectionRenameFormWrapperProps): JSX.Element => {

  const [ inputValue, setInputValue ] = React.useState<string>('');

  const allSectionsNames = useSelector((state: IState) => {
    return state.sections.allSections.map((section) => section.name);
  }, shallowEqual);

  const isNewSectionNameUnique = isStringUnique(getFormattedString(inputValue), allSectionsNames);

  const dispatch = useDispatch<TDispatch>();  

  const handleInputFieldClose = (): void => {
    setInputValue('');
    dispatch(resetRenamingSection());
  }

  const handleInputValueChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  }

  const handleSubmit = (): void => {   
    if (inputValue !== '') {
      const formattedInputValue = getFormattedString(inputValue);

      dispatch(renameSection({
        ...sectionData,
        name: formattedInputValue,
        path: `section-${ formattedInputValue }`
      }));

      if (isSectionActive) {
        dispatch(setActivePath(`section-${ formattedInputValue }`));
      }
    }
  }

  return <SidebarInputForm
    inputValue={ inputValue }
    isValid={ isNewSectionNameUnique }
    onInputValueChange={ handleInputValueChange }
    onClose={ handleInputFieldClose }
    onSubmit={ handleSubmit }
  />
}

export default SectionRenameFormWrapper;
