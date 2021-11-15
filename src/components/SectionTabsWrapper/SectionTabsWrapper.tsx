import { useSelector, shallowEqual } from 'react-redux';

import SectionTabs from '../SectionTabs/SectionTabs';

import { IState } from '../../types/state';

const SectionTabsWrapper= (): JSX.Element => {

  const sectionsIds = useSelector((state: IState) => {
    return state.sections.allSections.map(section => section._id);
  }, shallowEqual);

  return <SectionTabs sectionsIds={ sectionsIds } />;
}

export default SectionTabsWrapper;
