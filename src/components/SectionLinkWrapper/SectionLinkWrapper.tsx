import { useSelector, useDispatch } from 'react-redux';

import { setActivePath } from '../../utils/pathRouterSlice';

import SectionLink from '../SectionLink/SectionLink';

import { IState } from '../../types/state';
import { TDispatch } from '../../store';
import { ISectionLinkWrapperProps } from '../../types/sectionLinkWrapper';

const SectionLinkWrapper= ({ sectionName, path }: ISectionLinkWrapperProps): JSX.Element => {

  const selectedPath = useSelector<IState, string>((state: IState) => state.pathRouter.activePath);
  
  const dispatch = useDispatch<TDispatch>();

  const isActive = selectedPath === path;

  const handleLinkClick = (): void => {
    dispatch(setActivePath(path));
  }

  return <SectionLink
    sectionName={ sectionName }
    path={ path }
    isActive={ isActive }
    onClick={ handleLinkClick }
  />;
}

export default SectionLinkWrapper;
