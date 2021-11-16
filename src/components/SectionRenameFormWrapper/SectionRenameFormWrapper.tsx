import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { SECTION_NAME_PREFIX } from '../../config';

import isStringUnique from '../../utils/isStringUnique';
import getFormattedString from '../../utils/getFormattedString';
import { setActiveSection, resetRenamingSection, renameSection } from '../../utils/slices/sectionsSlice';
import { editTask } from '../../utils/slices/tasksSlice';

import SidebarInputForm from '../SidebarInputForm/SidebarInputForm';

import { TDispatch } from '../../store';
import { IState } from '../../types/state';
import { ISectionRenameFormWrapperProps } from '../../types/components/sectionRenameFormWrapper';

const SectionRenameFormWrapper = ({ sectionData, isSectionActive }: ISectionRenameFormWrapperProps): JSX.Element => {

  const currentSectionName = getFormattedString(sectionData.name.replace(SECTION_NAME_PREFIX, ''), 'capitalize');

  const [ inputValue, setInputValue ] = React.useState<string>(currentSectionName);

  const formattedInputValue = SECTION_NAME_PREFIX + getFormattedString(inputValue, 'lowercase');

  const sectionsNames = useSelector((state: IState) => {
    return state.sections.allSections.map(section => section.name);
  }, shallowEqual);

  const sectionTasks = useSelector((state: IState) => {
    return state.tasks.allTasks.filter(task => task.section === sectionData.path);
  }, shallowEqual);

  const isNewSectionNameUnique = isStringUnique(formattedInputValue, sectionsNames);

  const dispatch = useDispatch<TDispatch>();  

  const handleInputFieldClose = (): void => {
    dispatch(resetRenamingSection());
  }

  const handleInputValueChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  }

  const handleSubmit = (): void => {   
    if (inputValue !== '') {
      const sectionName = formattedInputValue;

      dispatch(renameSection({
        ...sectionData,
        name: sectionName
      }));

      if (isSectionActive) {
        dispatch(setActiveSection(sectionName));
      }

      sectionTasks.forEach(task => dispatch(editTask({
        ...task,
        section: sectionName
      })));
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
