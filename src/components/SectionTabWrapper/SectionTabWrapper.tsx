import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setActivePath } from '../../utils/slices/pathRouterSlice';
import { removeSection } from '../../utils/slices/sectionsSlice';

import SectionTab from '../SectionTab/SectionTab';

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

  const dispatch = useDispatch<TDispatch>();

  console.log('tab')

  const handleSectionClick = (): void => {
    dispatch(setActivePath(currentSection.path));
  }

  const handleSectionRemove = (evt: React.MouseEvent<HTMLButtonElement>): void => {
    evt.preventDefault();
    evt.stopPropagation();
    // const pos = state.sections.allSections.indexOf()s

    dispatch(removeSection(sectionId));
  }

  return <SectionTab
    sectionData={ currentSection }
    isActive={ isActive }
    onClick={ handleSectionClick }
    onRemove={ handleSectionRemove }
  />;
}

export default SectionTabWrapper;
