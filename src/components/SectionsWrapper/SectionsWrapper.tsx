import { useSelector } from 'react-redux';

import Sections from '../Sections/Sections';

import { IState } from '../../types/state';
import { ISection } from '../../types/section';

const SectionsWrapper= (): JSX.Element => {

  const sections = useSelector<IState, ISection[]>((state: IState) => state.sections.allSections);

  return <Sections sections={ sections } />;
}

export default SectionsWrapper;
