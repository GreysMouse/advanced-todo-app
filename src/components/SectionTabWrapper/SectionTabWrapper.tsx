import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { POPUP_MESSAGES } from '../../config';

import { setActiveSection, setRenamingSection, removeSection } from '../../utils/slices/sectionsSlice';
import { removeTask } from '../../utils/slices/tasksSlice';

import SectionTab from '../SectionTab/SectionTab';
import SectionRenameFormWrapper from '../SectionRenameFormWrapper/SectionRenameFormWrapper';
import PopupWrapper from '../PopupWrapper/PopupWrapper';

import { IState } from '../../types/state';
import { TDispatch } from '../../store';
import { ISection } from '../../types/section';
import { ISectionTabWrapperProps } from '../../types/components/sectionTabWrapper';

const SectionTabWrapper= ({ sectionId }: ISectionTabWrapperProps): JSX.Element => {

  const [ isDeleting, setIsDeleting ] = React.useState<boolean>(false);

  const sectionData = useSelector((state: IState) => {
    return state.sections.allSections.find(section => section._id === sectionId);
  }) as ISection;
  
  const isActive = useSelector((state: IState) => {
    return sectionData.path === state.sections.activeSection;
  });

  const isRenaming = useSelector((state: IState) => {
    return state.sections.renamingSection === sectionId;
  });

  const sectionTasksIds = useSelector((state: IState) => {
    return state.tasks.allTasks.reduce((acc: string[], curr) => {
      if (curr.section === sectionData.path) acc.push(curr._id);
      return acc;
    }, []);
  }, shallowEqual);

  const dispatch = useDispatch<TDispatch>();

  const handleSectionClick = (): void => {
    dispatch(setActiveSection(sectionData.path));
  }

  const handleSectionRename = (): void => {
    dispatch(setRenamingSection(sectionId));
  }

  const handleSectionRemove = (): void => {
    dispatch(removeSection(sectionId));
    setIsDeleting(false);

    sectionTasksIds.forEach(taskId => dispatch(removeTask(taskId)));
  }

  const handlePopupOpen = (): void => {
    setIsDeleting(true);
  }

  const handlePopupCancel = (): void => {
    setIsDeleting(false);
  }
  
  return (
    <>
      {
        isRenaming ?
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
            onRemove={ handlePopupOpen }
          />
        }
        {
          isDeleting && <PopupWrapper
            message={ POPUP_MESSAGES.REMOVE_SECTION }
            onSubmit={ handleSectionRemove }
            onCancel={ handlePopupCancel }
          />
        }
    </>
  );
}

export default SectionTabWrapper;
