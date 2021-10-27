import { useSelector } from 'react-redux';

import SectionLinksList from '../SectionLinksList/SectionLinksList';

import { IState } from '../../types/state';
import { ISection } from '../../types/section';

const SectionLinksListWrapper= (): JSX.Element => {

  const sections = useSelector<IState, ISection[]>((state: IState) => state.sections.allSections);

  return <SectionLinksList sections={ sections } />
}

export default SectionLinksListWrapper;
