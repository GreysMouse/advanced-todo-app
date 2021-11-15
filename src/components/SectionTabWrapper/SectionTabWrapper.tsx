import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { POPUP_MESSAGES } from '../../config';

import { setActivePath } from '../../utils/slices/pathRouterSlice';
import { setRenamingSection, removeSection } from '../../utils/slices/sectionsSlice';
import { editTask, removeTask } from '../../utils/slices/tasksSlice';

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
    return sectionData.path === state.pathRouter.activePath;
  });

  const isRenaming = useSelector((state: IState) => {
    return state.sections.renamingSection === sectionId;
  });

  const sectionTasks = useSelector((state: IState) => {
    return state.tasks.allTasks.filter(task => task.section === sectionData.path);
  }, shallowEqual);

  const dispatch = useDispatch<TDispatch>();

  const handleSectionClick = (): void => {
    dispatch(setActivePath(sectionData.path));
  }

  const handleSectionRename = (): void => {
    dispatch(setRenamingSection(sectionId));

    // sectionTasksIds.forEach(taskId => dispatch(editTask({
    //   ... 
    // })));
  }

  const handleSectionRemove = (): void => {
    dispatch(removeSection(sectionId));
    setIsDeleting(false);

    sectionTasks.forEach(task => dispatch(removeTask(task._id)));
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
