import { useSelector, useDispatch } from 'react-redux';

import { setActivePath } from '../../utils/slices/pathRouterSlice';

import SectionTab from '../SectionTab/SectionTab';

import { IState } from '../../types/state';
import { TDispatch } from '../../store';
import { ISectionTabWrapperProps } from '../../types/components/sectionTabWrapper';

const SectionTabWrapper= ({ sectionId }: ISectionTabWrapperProps): JSX.Element => {

  const selectedPath = useSelector((state: IState) => state.pathRouter.activePath);

  const currentSection = useSelector((state: IState) => {
    return state.sections.allSections.find((section) => {
      return section._id === sectionId;
    }) || state.sections.allSections[0];
  });
  
  const dispatch = useDispatch<TDispatch>();

  const isActive = selectedPath === currentSection.path;
  
  const handleLinkClick = (): void => {
    dispatch(setActivePath(currentSection.path));
  }

  return <SectionTab
    sectionData={ currentSection }
    isActive={ isActive }
    onClick={ handleLinkClick }
  />;
}

export default SectionTabWrapper;
