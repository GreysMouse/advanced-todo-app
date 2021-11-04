import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setActivePath } from '../../utils/slices/pathRouterSlice';
import { defineRenamingSection, removeSection } from '../../utils/slices/sectionsSlice';

import SectionTab from '../SectionTab/SectionTab';
import SectionRenameFormWrapper from '../SectionRenameFormWrapper/SectionRenameFormWrapper';

import { IState } from '../../types/state';
import { TDispatch } from '../../store';
import { ISectionTabWrapperProps } from '../../types/components/sectionTabWrapper';

const SectionTabWrapper= ({ sectionId }: ISectionTabWrapperProps): JSX.Element => {

  const currentSection = useSelector((state: IState) => {
    return state.sections.allSections.find((section) => {
      return section._id === sectionId;
    }) || state.sections.allSections[0];
  });
  
  const isActive = useSelector((state: IState) => {
    return currentSection.path === state.pathRouter.activePath;
  });

  const isInRenameingState = useSelector((state: IState) => {
    return state.sections.sectionInRenameState === sectionId;
  })

  const dispatch = useDispatch<TDispatch>();

  console.log('tab')

  const handleSectionClick = (): void => {
    dispatch(setActivePath(currentSection.path));
  }

  const handleSectionRename = (): void => {
    dispatch(defineRenamingSection(sectionId));
  }

  const handleSectionRemove = (): void => {
    dispatch(removeSection(sectionId));
  }
  
  return (
    isInRenameingState ?
      <SectionRenameFormWrapper
        sectionData={ currentSection }
        isSectionActive={ isActive }
      />
    :
      <SectionTab
        sectionData={ currentSection }
        isActive={ isActive }
        onClick={ handleSectionClick }
        onRename={ handleSectionRename }
        onRemove={ handleSectionRemove }
      />
  );
}

export default SectionTabWrapper;
