import { useSelector, useDispatch } from 'react-redux';

import { setActivePath } from '../../utils/slices/pathRouterSlice';

import SectionLink from '../SectionLink/SectionLink';

import { IState } from '../../types/state';
import { TDispatch } from '../../store';
import { ISectionLinkWrapperProps } from '../../types/components/sectionLinkWrapper';

const SectionLinkWrapper= ({ sectionId }: ISectionLinkWrapperProps): JSX.Element => {

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

  return <SectionLink
    sectionData={ currentSection }
    isActive={ isActive }
    onClick={ handleLinkClick }
  />;
}

export default SectionLinkWrapper;
