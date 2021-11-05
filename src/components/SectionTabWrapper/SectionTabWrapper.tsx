import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { POPUP_MESSAGES } from '../../config';

import { setActivePath } from '../../utils/slices/pathRouterSlice';
import { defineRenamingSection } from '../../utils/slices/sectionsSlice';
import { enablePopup } from '../../utils/slices/popupSlice';

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
    dispatch(enablePopup({
      type: 'removeSection',
      message: POPUP_MESSAGES.REMOVE_SECTION,
      actionPayload: sectionId
    }));
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
