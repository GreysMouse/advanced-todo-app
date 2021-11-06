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
import { ISection } from '../../types/section';
import { ISectionTabWrapperProps } from '../../types/components/sectionTabWrapper';

const SectionTabWrapper= ({ sectionId }: ISectionTabWrapperProps): JSX.Element => {

  const sectionData = useSelector((state: IState) => {
    return state.sections.allSections.find(section => section._id === sectionId);
  }) as ISection;
  
  const isActive = useSelector((state: IState) => {
    return sectionData.path === state.pathRouter.activePath;
  });

  const isInRenameingState = useSelector((state: IState) => {
    return state.sections.sectionInRenameState === sectionId;
  })

  const dispatch = useDispatch<TDispatch>();

  const handleSectionClick = (): void => {
    dispatch(setActivePath(sectionData.path));
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
        sectionData={ sectionData }
        isSectionActive={ isActive }
      />
    :
      <SectionTab
        sectionData={ sectionData }
        isActive={ isActive }
        onClick={ handleSectionClick }
        onRename={ handleSectionRename }
        onRemove={ handleSectionRemove }
      />
  );
}

export default SectionTabWrapper;
