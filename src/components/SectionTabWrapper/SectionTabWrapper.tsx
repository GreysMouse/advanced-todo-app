import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { POPUP_TYPES, POPUP_MESSAGES } from '../../config';

import { setActivePath } from '../../utils/slices/pathRouterSlice';
import { defineRenamingSection, removeSection } from '../../utils/slices/sectionsSlice';
import { removeTask } from '../../utils/slices/tasksSlice';
import { enablePopup } from '../../utils/slices/popupSlice';

import SectionTab from '../SectionTab/SectionTab';
import SectionRenameFormWrapper from '../SectionRenameFormWrapper/SectionRenameFormWrapper';
import PopupWrapper from '../PopupWrapper/PopupWrapper';

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

  const isInRenamingState = useSelector((state: IState) => {
    return state.sections.sectionInRenameState === sectionId;
  });

  const sectionTasksIds = useSelector((state: IState) => {
    return state.tasks.allTasks.reduce((acc: string[], curr) => {
      if (curr.section === sectionData.path) acc.push(curr._id);
      return acc;
    }, []);
  }, shallowEqual);

  const dispatch = useDispatch<TDispatch>();

  const handleSectionClick = (): void => {
    dispatch(setActivePath(sectionData.path));
  }

  const handleSectionRename = (): void => {
    dispatch(defineRenamingSection(sectionId));
  }

  const handleSectionRemove = (): void => {
    dispatch(removeSection(sectionId));

    sectionTasksIds.forEach(taskId => dispatch(removeTask(taskId)));
  }

  const handleOpenPopup = (): void => {
    dispatch(enablePopup(POPUP_TYPES.REMOVE_SECTION));
  }
  
  return (
    <>
      {
        isInRenamingState ?
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
            onRemove={ handleOpenPopup }
          />
        }
        <PopupWrapper
          type={ POPUP_TYPES.REMOVE_SECTION }
          message={ POPUP_MESSAGES.REMOVE_SECTION }
          onSubmit={ handleSectionRemove }
        />
    </>
  );
}

export default SectionTabWrapper;
