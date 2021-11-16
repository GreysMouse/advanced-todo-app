import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import isStringUnique from '../../utils/isStringUnique';
import getFormattedString from '../../utils/getFormattedString';
import { setActivePath } from '../../utils/slices/pathRouterSlice';
import { resetRenamingSection, renameSection } from '../../utils/slices/sectionsSlice';
import { editTask } from '../../utils/slices/tasksSlice';

import SidebarInputForm from '../SidebarInputForm/SidebarInputForm';

import { TDispatch } from '../../store';
import { IState } from '../../types/state';
import { ISectionRenameFormWrapperProps } from '../../types/components/sectionRenameFormWrapper';

const SectionRenameFormWrapper = ({ sectionData, isSectionActive }: ISectionRenameFormWrapperProps): JSX.Element => {

  const [ inputValue, setInputValue ] = React.useState<string>(sectionData.name);

  const sectionsNames = useSelector((state: IState) => {
    return state.sections.allSections.map((section) => section.name);
  }, shallowEqual);

  const sectionTasks = useSelector((state: IState) => {
    return state.tasks.allTasks.filter(task => task.section === sectionData.path);
  }, shallowEqual);

  const isNewSectionNameUnique = isStringUnique(getFormattedString(inputValue, 'lowercase'), sectionsNames);

  const dispatch = useDispatch<TDispatch>();  

  const handleInputFieldClose = (): void => {
    dispatch(resetRenamingSection());
  }

  const handleInputValueChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  }

  const handleSubmit = (): void => {   
    if (inputValue !== '') {
      const formattedInputValue = getFormattedString(inputValue, 'lowercase');

      dispatch(renameSection({
        ...sectionData,
        name: formattedInputValue,
        path: `section-${ formattedInputValue }`
      }));

      if (isSectionActive) {
        dispatch(setActivePath(`section-${ formattedInputValue }`));
      }

      sectionTasks.forEach(task => dispatch(editTask({
        ...task,
        section: `section-${ formattedInputValue }`
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
